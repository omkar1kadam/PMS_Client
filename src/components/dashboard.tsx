"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus, BarChart3, FolderOpen, ExternalLink, LogOut } from "lucide-react"
import type { Project } from "types/project"
import {BASE_URL} from "./AppUrl.js"
import axios from "axios"
import { Link } from "react-router-dom"

//interface DashboardProps {
//  isLoading?: boolean
//isLoading = false }: DashboardProps
//}

interface DepartmentStats {
  [key: string]: number
}

export default function Dashboard( ) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Supabase",
      image: "/Amazon.jpeg",
      members: [
        { id: "1", name: "Sarah Johnson", department: "Computer Science", graduationYear: 2024, isLeader: true, email: "sarah.johnson@email.com" },
        { id: "2", name: "Mike Chen", department: "Computer Science", graduationYear: 2024, isLeader: false, email: "sarah.johnson@email.com" },
        { id: "3", name: "Emily Davis", department: "Information Technology", graduationYear: 2025, isLeader: false, email: "sarah.johnson@email.com" },
      ],
     mentor: {
        name: "Dr. Robert Wilson",
        email: "robert.wilson@university.edu",
      },
      githubUrl: "https://github.com/team/ecommerce-platform",
      submissionDate: "2024-03-15T10:30:00Z",
      deployedUrl: "https://ecommerce-demo.vercel.app",
      erDiagram: "/database-er-diagram-with-tables-and-relationships.jpg",
      systemArchitecture: "/system-architecture-diagram-with-microservices.jpg",
      tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "2",
      title: "Student Management System",
      description: "A comprehensive system for managing student records and academic data",
      image: "/Scre.png",
      members: [
        { id: "4", name: "Alex Rodriguez", department: "Software Engineering", graduationYear: 2024, isLeader: true, email: "sarah.johnson@email.com" },
        { id: "5", name: "Jessica Wong", department: "Computer Science", graduationYear: 2024, isLeader: false, email: "sarah.johnson@email.com" },
      ],
      mentor: {
        name: "Dr. Robert Wilson",
        email: "robert.wilson@university.edu",
      },
      githubUrl: "https://github.com/team/student-management",
      submissionDate: "2024-02-28T14:20:00Z",
      deployedUrl: "https://student-mgmt.vercel.app",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: "3",
      title: "Healthcare Analytics Dashboard",
      description: "Real-time analytics dashboard for healthcare data visualization",
      image: "/skyrim.jpg",
      members: [
        { id: "6", name: "David Kim", department: "Data Science", graduationYear: 2025, isLeader: true, email: "sarah.johnson@email.com" },
        { id: "7", name: "Maria Garcia", department: "Information Systems", graduationYear: 2025, isLeader: false, email: "sarah.johnson@email.com" },
        { id: "8", name: "James Wilson", department: "Computer Science", graduationYear: 2024, isLeader: false, email: "sarah.johnson@email.com" },
      ],
      mentor: {
        name: "Dr. Robert Wilson",
        email: "robert.wilson@university.edu",
      },
      githubUrl: "https://github.com/team/healthcare-dashboard",
      submissionDate: "2024-01-20T09:15:00Z",
      tags: ["Python", "Django", "PostgreSQL", "D3.js"],
    },
    {
      id: "4",
      title: "IoT Smart Home System",
      description: "Integrated IoT solution for smart home automation and monitoring",
      image: "/picture-lake.jpg",
      members: [
        {
          id: "9",
          name: "Rachel Thompson",
          department: "Electrical Engineering",
          graduationYear: 2024,
          isLeader: true, email: "sarah.johnson@email.com"
        },
        { id: "10", name: "Kevin Lee", department: "Computer Engineering", graduationYear: 2024, isLeader: false, email: "sarah.johnson@email.com" },
      ],
      mentor: {
        name: "Dr. Robert Wilson",
        email: "robert.wilson@university.edu",
      },
      githubUrl: "https://github.com/team/smart-home-iot",
      submissionDate: "2024-03-01T16:45:00Z",
      deployedUrl: "https://smart-home-demo.vercel.app",
      tags: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
    },
  ])

  useEffect(()=>{
    const fetchProjects = async () =>{
        setIsLoading(true);

        // yaha pe jwt token aaye ga, token defined nahi hai to comment kiya, error nahi hai
       // if (!token) {
        //    console.error('No token found');
         //   setIsLoading(false);
        //    return;
        //  }

        try {
            const response = await axios.get(`${BASE_URL}/api/v1/projects/`, {
              headers: {
                Authorization: `Bearer token`,
              },
            });
    
            if (response.data && Array.isArray(response.data)) {
              setProjects(response.data);
            } else {
              console.warn("Invalid data from API, keeping dummy data");
            }

          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }


    }
    fetchProjects();
  }, [])

  // Calculate statistics
  const totalProjects = projects.length
  const departmentStats: DepartmentStats = projects.reduce((acc, project) => {
    project.members.forEach((member) => {
      acc[member.department] = (acc[member.department] || 0) + 1
    })
    return acc
  }, {} as DepartmentStats)

  if (isLoading) {
    return <DashboardSkeleton />
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Project Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage and track all student projects</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              variant="outline"
              className="border-border hover:bg-red-500 w-full sm:w-auto bg-transparent"
              onClick={() => {
                //  yaha pe logout logic dal 
                console.log("Logout clicked")
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Link to={'/project/create'}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
            </Link>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-card-foreground text-sm sm:text-base">Total Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-primary text-2xl sm:text-4xl">{totalProjects}</div>
              <p className="text-xs text-muted-foreground">Active student projects</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-sm sm:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-card-foreground text-sm sm:text-base">Top Departments</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(departmentStats)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 3)
                  .map(([dept, count]) => (
                    <div key={dept} className="flex justify-between items-center">
                      <span className="text-xs text-card-foreground truncate pr-2">{dept}</span>
                      <Badge variant="secondary" className="text-xs shrink-0 bg-purple-50">
                        {count}
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1 text-sm sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{project.description.length>70?project.description.slice(0,65)+"...":project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-purple-500 text-white">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs bg-purple-500 text-white">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {project.members.length} member{project.members.length !== 1 ? "s" : ""}
                    </div>
                    {project.deployedUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 sm:h-7 px-2 bg-transparent text-xs"
                        onClick={() => window.open(project.deployedUrl, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">View</span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Skeleton className="h-6 sm:h-8 w-48 sm:w-64 mb-2 bg-gray-200" />
            <Skeleton className="h-4 w-36 sm:w-48 bg-gray-200" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Skeleton className="h-10 w-full sm:w-20 bg-gray-200" />
            <Skeleton className="h-10 w-full sm:w-40 bg-gray-200" />
          </div>
        </div>

        {/* Statistics Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-20 sm:w-24 bg-gray-200" />
                <Skeleton className="h-4 w-4 bg-gray-200" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-6 sm:h-8 w-8 sm:w-12 mb-1 bg-gray-200" />
                <Skeleton className="h-3 w-24 sm:w-32 bg-gray-200" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid Skeleton */}
        <div>
          <Skeleton className="h-5 sm:h-6 w-24 sm:w-32 mb-4 sm:mb-6 bg-gray-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="bg-card border-border">
                <Skeleton className="aspect-video w-full rounded-t-lg bg-gray-200" />
                <CardContent className="p-3 sm:p-4">
                  <Skeleton className="h-4 sm:h-5 w-full mb-2 bg-gray-200" />
                  <Skeleton className="h-3 sm:h-4 w-full mb-1 bg-gray-200" />
                  <Skeleton className="h-3 sm:h-4 w-3/4 mb-3 bg-gray-200" />
                  <div className="flex gap-1 mb-3">
                    <Skeleton className="h-4 sm:h-5 w-12 sm:w-16 bg-gray-200" />
                    <Skeleton className="h-4 sm:h-5 w-8 sm:w-12 bg-gray-200" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-12 sm:w-16 bg-gray-200" />
                    <Skeleton className="h-6 sm:h-7 w-12 sm:w-16 bg-gray-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
