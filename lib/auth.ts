import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { query, queryOne } from './db';
import type { User } from '@/types';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: 'user' | 'admin';
    };
  }
  
  interface User {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string;
    role: 'user' | 'admin';
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email và mật khẩu là bắt buộc');
        }
        
        const email = credentials.email as string;
        const password = credentials.password as string;
        
        // Find user by email
        const user = await queryOne<User & { passwordHash: string }>(
          'SELECT * FROM Users WHERE Email = @email',
          { email }
        );
        
        if (!user) {
          throw new Error('Email hoặc mật khẩu không đúng');
        }
        
        // Verify password
        const isValid = await bcrypt.compare(password, user.passwordHash);
        
        if (!isValid) {
          throw new Error('Email hoặc mật khẩu không đúng');
        }
        
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.fullName,
          role: user.role
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
});

// Helper function to hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Helper function to verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
