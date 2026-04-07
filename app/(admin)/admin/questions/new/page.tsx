"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeftIcon, PlusIcon, TrashIcon } from "@/components/icons"
import { mockQuizCategories } from "@/lib/mock-data"

export default function NewQuestionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState("0")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push("/admin/questions")
  }

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, ""])
    }
  }

  const removeOption = (index: number) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index)
      setOptions(newOptions)
      if (parseInt(correctAnswer) >= newOptions.length) {
        setCorrectAnswer("0")
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/questions">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Quay lại</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Thêm câu hỏi mới</h1>
          <p className="text-muted-foreground">Tạo câu hỏi trắc nghiệm</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin câu hỏi</CardTitle>
            <CardDescription>Danh mục và độ khó</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Danh mục *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockQuizCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Độ khó *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn độ khó" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Dễ</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="hard">Khó</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="question">Câu hỏi *</Label>
              <Textarea 
                id="question" 
                placeholder="Nhập nội dung câu hỏi..."
                rows={3}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Các đáp án</CardTitle>
            <CardDescription>Chọn đáp án đúng bằng cách nhấn vào radio button</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={correctAnswer} onValueChange={setCorrectAnswer}>
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Input
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Đáp án ${String.fromCharCode(65 + index)}`}
                    className="flex-1"
                    required
                  />
                  {options.length > 2 && (
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeOption(index)}
                    >
                      <TrashIcon className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
            </RadioGroup>

            {options.length < 6 && (
              <Button type="button" variant="outline" onClick={addOption}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Thêm đáp án
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Giải thích</CardTitle>
            <CardDescription>Giải thích đáp án đúng (không bắt buộc)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="explanation">Nội dung giải thích</Label>
              <Textarea 
                id="explanation" 
                placeholder="Giải thích tại sao đáp án đúng là..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Đang lưu..." : "Lưu câu hỏi"}
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/questions">Hủy</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
