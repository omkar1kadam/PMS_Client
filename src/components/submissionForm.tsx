"use client"

import type React from "react"
import { BASE_URL } from "./AppUrl"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Upload, X } from "lucide-react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ProjectFormSkeleton from "./skeletalForm"
import { Mirage } from "ldrs/react"

const departments = ["Computer Engineering", "AIDS", "Information Technology", "ENTC"]
const techStacks = ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "Java", "C++"]

interface TeamMember {
  name: string
  department: string
  graduationYear: number
  email: string
}

export default function CreateProjectForm() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    githubUrl: "",
    deployedUrl: "",
    erDiagram: "",
    systemArchitecture: "",
    leader: {
      name: "",
      department: "",
      graduationYear: 2028,
      email: "",
    },
    mentor: {
      name: "",
      email: "",
    },
  })

  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([])
  const [members, setMembers] = useState<TeamMember[]>([])

  const addTechStack = (tech: string) => {
    if (!selectedTechStack.includes(tech)) {
      setSelectedTechStack([...selectedTechStack, tech])
    }
  }

  const removeTechStack = (tech: string) => {
    setSelectedTechStack(selectedTechStack.filter((t) => t !== tech))
  }

  const addMember = () => {
    if (members.length < 4) {
      setMembers([...members, { name: "", department: "", graduationYear: 2024, email: "" }])
    }
  }

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index))
  }

  const updateMember = (index: number, field: keyof TeamMember, value: string | number) => {
    const updatedMembers = [...members]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setMembers(updatedMembers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //if(!token){
    //  console.error("no token")
    //  setLoading(false);
    //  return;
   // }
    setIsLoading(true);
    setIsLoading(true);

    axios
    .post(`${BASE_URL}/api/v1/projects/`, formData,{
      headers:{
        Authorization: `Bearer {token}`,
        'Content-Type':'application/json',
      }
    })
    .then (()=>{
      setIsLoading(false);
      setIsSubmitting(false);
      navigate('/')
    })
    .catch((error)=>{
      setIsLoading(false);
      setIsSubmitting(false);
      console.log(error); 
    })
    //console.log("Form submitted:", { ...formData, techStack: selectedTechStack, members })
  }

  if(isLoading)
  {
    return <ProjectFormSkeleton/>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">Submit New Project</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Fill out the form below to submit your project
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Project Details */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-purple-600">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Title </label>
                <Input
                  placeholder="Enter your project title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Description </label>
                <Textarea
                  placeholder="Describe your project in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500 min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Project Image</label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Upload or paste image URL"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">GitHub Repository</label>
                  <Input
                    placeholder="https://github.com/username/repo"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Deployed Website (Optional)</label>
                <Input
                  placeholder="https://your-project.vercel.app"
                  value={formData.deployedUrl}
                  onChange={(e) => setFormData({ ...formData, deployedUrl: e.target.value })}
                  className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">Tech Stack </label>
                <div className="space-y-3">
                  <Select onValueChange={addTechStack}>
                    <SelectTrigger className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500">
                      <SelectValue placeholder="Select technologies used" />
                    </SelectTrigger>
                    <SelectContent>
                      {techStacks.map((tech) => (
                        <SelectItem key={tech} value={tech} disabled={selectedTechStack.includes(tech)}>
                          {tech}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedTechStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedTechStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTechStack(tech)}
                            className="ml-2 hover:text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ER Diagram (Optional)</label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Upload or paste diagram URL"
                      value={formData.erDiagram}
                      onChange={(e) => setFormData({ ...formData, erDiagram: e.target.value })}
                      className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">System Architecture (Optional)</label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Upload or paste architecture URL"
                      value={formData.systemArchitecture}
                      onChange={(e) => setFormData({ ...formData, systemArchitecture: e.target.value })}
                      className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Leader */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-purple-600">Team Leader</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name </label>
                  <Input
                    placeholder="Enter leader's full name"
                    value={formData.leader.name}
                    onChange={(e) => setFormData({ ...formData, leader: { ...formData.leader, name: e.target.value } })}
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address </label>
                  <Input
                    type="email"
                    placeholder="leader@example.com"
                    value={formData.leader.email}
                    onChange={(e) =>
                      setFormData({ ...formData, leader: { ...formData.leader, email: e.target.value } })
                    }
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Department </label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, leader: { ...formData.leader, department: value } })
                    }
                  >
                    <SelectTrigger className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Graduation Year </label>
                  <Input
                    type="number"
                    placeholder="2024"
                    min="2020"
                    max="2030"
                    value={formData.leader.graduationYear}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leader: { ...formData.leader, graduationYear: Number.parseInt(e.target.value) },
                      })
                    }
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg sm:text-xl text-purple-600">
                Team Members (Optional)
                <Button type="button" variant="outline" size="sm" onClick={addMember} disabled={members.length >= 4}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {members.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No team members added yet. Click "Add Member" to add up to 4 team members.
                </p>
              ) : (
                members.map((member, index) => (
                  <div key={index} className="p-4 sm:p-6 border border-gray-200 rounded-lg bg-gray-50 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-700">Member {index + 1}</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeMember(index)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Full Name </label>
                        <Input
                          placeholder="Enter member's full name"
                          value={member.name}
                          onChange={(e) => updateMember(index, "name", e.target.value)}
                          className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Email Address </label>
                        <Input
                          type="email"
                          placeholder="member@example.com"
                          value={member.email}
                          onChange={(e) => updateMember(index, "email", e.target.value)}
                          className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Department </label>
                        <Select onValueChange={(value) => updateMember(index, "department", value)}>
                          <SelectTrigger className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Graduation Year </label>
                        <Input
                          type="number"
                          placeholder="2024"
                          min="2020"
                          max="2030"
                          value={member.graduationYear}
                          onChange={(e) => updateMember(index, "graduationYear", Number.parseInt(e.target.value))}
                          className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Mentor */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-purple-600">Mentor (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mentor Name</label>
                  <Input
                    placeholder="Enter mentor's full name"
                    value={formData.mentor.name}
                    onChange={(e) => setFormData({ ...formData, mentor: { ...formData.mentor, name: e.target.value } })}
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mentor Email</label>
                  <Input
                    type="email"
                    placeholder="mentor@example.com"
                    value={formData.mentor.email}
                    onChange={(e) =>
                      setFormData({ ...formData, mentor: { ...formData.mentor, email: e.target.value } })
                    }
                    className="bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl"
            >
              Submit Project
            </Button>
          </div>
        </form>
        {isSubmitting && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 pointer-events-auto">
          <Mirage/>
        </div>
      )}
      </div>
    </div>
  )
}
