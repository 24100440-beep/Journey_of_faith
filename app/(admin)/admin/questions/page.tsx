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
import { mockQuestions, mockQuizCategories } from "@/lib/mock-data"

const difficultyMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  easy: { label: "Dễ", variant: "secondary" },
  medium: { label: "Trung bình", variant: "default" },
  hard: { label: "Khó", variant: "destructive" },
}

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const getCategoryName = (categoryId: string) => {
    const category = mockQuizCategories.find(c => c.id === categoryId)
    return category?.name || "Không xác định"
  }

  const filteredQuestions = mockQuestions.filter(question =>
    question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    getCategoryName(question.categoryId).toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quản lý Câu Hỏi</h1>
          <p className="text-muted-foreground">Kho câu hỏi trắc nghiệm giáo lý</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/questions/categories">
              Danh mục
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/questions/new">
              <PlusIcon className="h-4 w-4 mr-2" />
              Thêm câu hỏi
            </Link>
          </Button>
        </div>
      </div>

      {/* Category summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockQuizCategories.slice(0, 4).map((category) => {
          const questionCount = mockQuestions.filter(q => q.categoryId === category.id).length
          return (
            <Card key={category.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{questionCount}</p>
                <p className="text-xs text-muted-foreground">câu hỏi</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Danh sách câu hỏi</CardTitle>
              <CardDescription>{filteredQuestions.length} câu hỏi</CardDescription>
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
                  <TableHead>Câu hỏi</TableHead>
                  <TableHead className="hidden md:table-cell">Danh mục</TableHead>
                  <TableHead className="hidden sm:table-cell">Độ khó</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question) => {
                  const difficulty = difficultyMap[question.difficulty] || difficultyMap.medium
                  return (
                    <TableRow key={question.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium line-clamp-2">{question.question}</p>
                          <p className="text-sm text-muted-foreground md:hidden">
                            {getCategoryName(question.categoryId)}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {getCategoryName(question.categoryId)}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant={difficulty.variant}>{difficulty.label}</Badge>
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
                              <Link href={`/admin/questions/${question.id}/edit`}>
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
