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
import { mockChurches } from "@/lib/mock-data"

export default function ChurchesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChurches = mockChurches.filter(church =>
    church.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    church.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quản lý Nhà Thờ</h1>
          <p className="text-muted-foreground">Danh sách các nhà thờ trong hệ thống</p>
        </div>
        <Button asChild>
          <Link href="/admin/churches/new">
            <PlusIcon className="h-4 w-4 mr-2" />
            Thêm nhà thờ
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Danh sách nhà thờ</CardTitle>
              <CardDescription>{filteredChurches.length} nhà thờ</CardDescription>
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
                  <TableHead>Tên nhà thờ</TableHead>
                  <TableHead className="hidden md:table-cell">Địa chỉ</TableHead>
                  <TableHead className="hidden sm:table-cell">Giáo phận</TableHead>
                  <TableHead className="hidden lg:table-cell">Số lễ/tuần</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredChurches.map((church) => (
                  <TableRow key={church.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{church.name}</p>
                        <p className="text-sm text-muted-foreground md:hidden">{church.address}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{church.address}</TableCell>
                    <TableCell className="hidden sm:table-cell">{church.diocese}</TableCell>
                    <TableCell className="hidden lg:table-cell">{church.massesPerWeek}</TableCell>
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
                            <Link href={`/admin/churches/${church.id}`}>
                              <EyeIcon className="h-4 w-4 mr-2" />
                              Xem chi tiết
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/churches/${church.id}/edit`}>
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
