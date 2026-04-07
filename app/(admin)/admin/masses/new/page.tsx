"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeftIcon } from "@/components/icons"
import { mockChurches } from "@/lib/mock-data"

const liturgicalColors = [
  { value: "white", label: "Trắng - Lễ trọng, Chúa Nhật Phục Sinh" },
  { value: "purple", label: "Tím - Mùa Vọng, Mùa Chay" },
  { value: "red", label: "Đỏ - Lễ Tử Đạo, Chúa Thánh Thần" },
  { value: "green", label: "Xanh - Mùa Thường Niên" },
  { value: "gold", label: "Vàng - Lễ trọng đặc biệt" },
  { value: "rose", label: "Hồng - Chúa Nhật III Vọng, IV Chay" },
]

export default function NewMassPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/admin/masses")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/masses">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Quay lại</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Thêm lịch lễ mới</h1>
          <p className="text-muted-foreground">Điền thông tin buổi lễ bên dưới</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin buổi lễ</CardTitle>
          <CardDescription>Các thông tin về buổi lễ</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Tiêu đề *</Label>
              <Input id="title" placeholder="VD: Chúa Nhật XV Thường Niên" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="church">Nhà thờ *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn nhà thờ" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockChurches.map((church) => (
                      <SelectItem key={church.id} value={church.id}>
                        {church.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Màu phụng vụ *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn màu" />
                  </SelectTrigger>
                  <SelectContent>
                    {liturgicalColors.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        {color.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Ngày *</Label>
                <Input id="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Giờ *</Label>
                <Input id="time" type="time" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="celebrant">Chủ tế</Label>
              <Input id="celebrant" placeholder="VD: Cha Gioan Nguyễn Văn A" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Ghi chú</Label>
              <Textarea 
                id="description" 
                placeholder="Thông tin thêm về buổi lễ..."
                rows={3}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Đang lưu..." : "Lưu lịch lễ"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/masses">Hủy</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
