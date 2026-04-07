"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon } from "@/components/icons"

export default function NewGospelPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/admin/gospels")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/gospels">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Quay lại</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Thêm Lời Chúa mới</h1>
          <p className="text-muted-foreground">Điền nội dung Lời Chúa bên dưới</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin chung</CardTitle>
            <CardDescription>Ngày và tiêu đề</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Ngày *</Label>
                <Input id="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu đề *</Label>
                <Input id="title" placeholder="VD: Chúa Nhật XV Thường Niên" required />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bài đọc 1</CardTitle>
            <CardDescription>Bài đọc từ Cựu Ước hoặc Tông đồ Công vụ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstReadingRef">Tham chiếu *</Label>
              <Input id="firstReadingRef" placeholder="VD: Is 55,10-11" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstReading">Nội dung *</Label>
              <Textarea 
                id="firstReading" 
                placeholder="Nhập nội dung bài đọc 1..."
                rows={6}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Đáp ca</CardTitle>
            <CardDescription>Thánh vịnh đáp ca</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="psalmRef">Tham chiếu *</Label>
              <Input id="psalmRef" placeholder="VD: Tv 64" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="psalm">Nội dung *</Label>
              <Textarea 
                id="psalm" 
                placeholder="Nhập nội dung đáp ca..."
                rows={4}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tin Mừng</CardTitle>
            <CardDescription>Bài Tin Mừng trong ngày</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gospelRef">Tham chiếu *</Label>
              <Input id="gospelRef" placeholder="VD: Mt 13,1-23" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gospel">Nội dung *</Label>
              <Textarea 
                id="gospel" 
                placeholder="Nhập nội dung Tin Mừng..."
                rows={8}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suy niệm</CardTitle>
            <CardDescription>Bài suy niệm (không bắt buộc)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reflection">Nội dung suy niệm</Label>
              <Textarea 
                id="reflection" 
                placeholder="Nhập nội dung suy niệm..."
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Đang lưu..." : "Lưu Lời Chúa"}
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/gospels">Hủy</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
