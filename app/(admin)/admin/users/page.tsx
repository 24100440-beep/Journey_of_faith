"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SearchIcon, MoreIcon, EditIcon, TrashIcon, ShieldIcon } from "@/components/icons"

const mockUsers = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    email: "nguyenvanan@gmail.com",
    role: "user",
    parish: "Nhà thờ Đức Bà",
    createdAt: "2026-01-15",
    quizCount: 45,
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    email: "tranthibinh@gmail.com",
    role: "user",
    parish: "Nhà thờ Tân Định",
    createdAt: "2026-02-20",
    quizCount: 32,
  },
  {
    id: "3",
    name: "Admin Giáo Xứ",
    email: "admin@giaoxu.vn",
    role: "admin",
    parish: "Quản trị viên",
    createdAt: "2025-12-01",
    quizCount: 0,
  },
  {
    id: "4",
    name: "Lê Minh Châu",
    email: "leminhchau@gmail.com",
    role: "user",
    parish: "Nhà thờ Huyện Sĩ",
    createdAt: "2026-03-01",
    quizCount: 28,
  },
  {
    id: "5",
    name: "Phạm Đức Dũng",
    email: "phamducdung@gmail.com",
    role: "user",
    parish: "Nhà thờ Chợ Quán",
    createdAt: "2026-03-10",
    quizCount: 15,
  },
]

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.parish.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quản lý Người Dùng</h1>
          <p className="text-muted-foreground">Danh sách người dùng trong hệ thống</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUsers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quản trị viên</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUsers.filter(u => u.role === "admin").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Giáo dân</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUsers.filter(u => u.role === "user").length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Danh sách người dùng</CardTitle>
              <CardDescription>{filteredUsers.length} người dùng</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Người dùng</TableHead>
                  <TableHead className="hidden md:table-cell">Giáo xứ</TableHead>
                  <TableHead className="hidden sm:table-cell">Vai trò</TableHead>
                  <TableHead className="hidden lg:table-cell">Bài thi</TableHead>
                  <TableHead className="hidden lg:table-cell">Ngày đăng ký</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.parish}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                        {user.role === "admin" ? "Quản trị" : "Giáo dân"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">{user.quizCount}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {new Date(user.createdAt).toLocaleDateString("vi-VN")}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreIcon className="h-4 w-4" />
                            <span className="sr-only">Mở menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <EditIcon className="h-4 w-4 mr-2" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShieldIcon className="h-4 w-4 mr-2" />
                            Đổi vai trò
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <TrashIcon className="h-4 w-4 mr-2" />
                            Xóa tài khoản
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
