"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { PlusIcon, SearchIcon, MoreIcon, EditIcon, TrashIcon, EyeIcon } from "@/components/icons"
import { mockGospels } from "@/lib/mock-data"

export default function GospelsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGospels = mockGospels.filter(gospel =>
    gospel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gospel.gospelReference.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quản lý Lời Chúa</h1>
          <p className="text-muted-foreground">Các bài Lời Chúa hàng ngày</p>
        </div>
        <Button asChild>
          <Link href="/admin/gospels/new">
            <PlusIcon className="h-4 w-4 mr-2" />
            Thêm Lời Chúa
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Danh sách Lời Chúa</CardTitle>
              <CardDescription>{filteredGospels.length} bài</CardDescription>
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
                  <TableHead>Ngày</TableHead>
                  <TableHead className="hidden sm:table-cell">Tiêu đề</TableHead>
                  <TableHead className="hidden md:table-cell">Tin Mừng</TableHead>
                  <TableHead className="hidden lg:table-cell">Bài đọc 1</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGospels.map((gospel) => (
                  <TableRow key={gospel.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {new Date(gospel.date).toLocaleDateString("vi-VN")}
                        </p>
                        <p className="text-sm text-muted-foreground sm:hidden">
                          {gospel.title}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <p className="font-medium">{gospel.title}</p>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {gospel.gospelReference}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {gospel.firstReadingReference}
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
                            <Link href={`/admin/gospels/${gospel.id}`}>
                              <EyeIcon className="h-4 w-4 mr-2" />
                              Xem chi tiết
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/gospels/${gospel.id}/edit`}>
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
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
