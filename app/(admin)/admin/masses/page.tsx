"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import { PlusIcon, SearchIcon, MoreIcon, EditIcon, TrashIcon } from "@/components/icons"
import { mockMasses, mockChurches } from "@/lib/mock-data"

const liturgicalColorMap: Record<string, { label: string; className: string }> = {
  white: { label: "Trắng", className: "bg-white text-foreground border" },
  purple: { label: "Tím", className: "bg-purple-600 text-white" },
  red: { label: "Đỏ", className: "bg-red-600 text-white" },
  green: { label: "Xanh", className: "bg-green-600 text-white" },
  gold: { label: "Vàng", className: "bg-yellow-500 text-foreground" },
  rose: { label: "Hồng", className: "bg-pink-400 text-white" },
}

export default function MassesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const getChurchName = (churchId: string) => {
    const church = mockChurches.find(c => c.id === churchId)
    return church?.name || "Không xác định"
  }

  const filteredMasses = mockMasses.filter(mass =>
    mass.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    getChurchName(mass.churchId).toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quản lý Lịch Lễ</h1>
          <p className="text-muted-foreground">Danh sách các buổi lễ trong hệ thống</p>
        </div>
        <Button asChild>
          <Link href="/admin/masses/new">
            <PlusIcon className="h-4 w-4 mr-2" />
            Thêm lịch lễ
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Danh sách lịch lễ</CardTitle>
              <CardDescription>{filteredMasses.length} buổi lễ</CardDescription>
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
                  <TableHead>Tiêu đề</TableHead>
                  <TableHead className="hidden md:table-cell">Nhà thờ</TableHead>
                  <TableHead className="hidden sm:table-cell">Ngày</TableHead>
                  <TableHead className="hidden lg:table-cell">Giờ</TableHead>
                  <TableHead>Màu PV</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMasses.map((mass) => {
                  const color = liturgicalColorMap[mass.liturgicalColor] || liturgicalColorMap.white
                  return (
                    <TableRow key={mass.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{mass.title}</p>
                          <p className="text-sm text-muted-foreground md:hidden">
                            {getChurchName(mass.churchId)}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {getChurchName(mass.churchId)}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {new Date(mass.date).toLocaleDateString("vi-VN")}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">{mass.time}</TableCell>
                      <TableCell>
                        <Badge className={color.className}>{color.label}</Badge>
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
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/masses/${mass.id}/edit`}>
                                <EditIcon className="h-4 w-4 mr-2" />
                                Chỉnh sửa
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <TrashIcon className="h-4 w-4 mr-2" />
                              Xóa
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
