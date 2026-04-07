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

export default function NewChurchPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In production, save to database
    router.push("/admin/churches")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/churches">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Quay lại</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Thêm nhà thờ mới</h1>
          <p className="text-muted-foreground">Điền thông tin nhà thờ bên dưới</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin nhà thờ</CardTitle>
          <CardDescription>Các thông tin cơ bản về nhà thờ</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Tên nhà thờ *</Label>
                <Input id="name" placeholder="VD: Nhà thờ Đức Bà Sài Gòn" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="diocese">Giáo phận *</Label>
                <Input id="diocese" placeholder="VD: Giáo phận TP.HCM" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Địa chỉ *</Label>
              <Input id="address" placeholder="VD: 01 Công xã Paris, Quận 1, TP.HCM" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" type="tel" placeholder="VD: 028 3829 0093" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="VD: info@ducba.vn" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pastor">Linh mục quản xứ</Label>
              <Input id="pastor" placeholder="VD: Cha Gioan Nguyễn Văn A" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Mô tả</Label>
              <Textarea 
                id="description" 
                placeholder="Mô tả ngắn về nhà thờ..."
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Đang lưu..." : "Lưu nhà thờ"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/churches">Hủy</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
