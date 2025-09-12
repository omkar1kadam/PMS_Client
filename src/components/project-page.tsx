"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Edit } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  Crown,
  GraduationCap,
  Database,
  Network,
  X,
  Maximize2,
} from "lucide-react"
import data from "../app/data"
import type { Project } from "types/project"
import {BASE_URL} from "./AppUrl.ts"
import axios from "axios"

// interface ProjectPageProps {
//   project: Project
//   isLoading?: boolean
// }

function FullscreenModal({
  src,
  alt,
  isOpen,
  onClose,
}: { src: string; alt: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4 animate-in fade-in-0 duration-300">
      <div className="relative max-w-full max-h-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
        />
      </div>
    </div>
  )
}

function ProjectPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <div className="h-8 sm:h-10 bg-muted rounded-lg w-3/4 mb-4 animate-pulse"></div>
              <div className="flex items-center gap-4">
                <div className="h-4 bg-muted rounded w-32 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="h-8 bg-muted rounded w-16 sm:w-20 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="h-8 bg-muted rounded w-20 sm:w-24 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <Card className="shadow-sm animate-in slide-in-from-left-5 duration-500">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  className="aspect-video bg-muted rounded-lg animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                  <div className="h-4 bg-muted rounded w-1/2 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm animate-in slide-in-from-left-5 duration-500" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="h-6 bg-muted rounded w-48 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  className="aspect-video bg-muted rounded-lg animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                ></div>
                <div
                  className="aspect-video bg-muted rounded-lg animate-pulse"
                  style={{ animationDelay: "0.9s" }}
                ></div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6 animate-in slide-in-from-right-5 duration-500" style={{ animationDelay: "0.3s" }}>
            <Card className="shadow-sm">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-muted rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "1.1s" }}></div>
                    <div className="h-3 bg-muted rounded w-32 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-20 animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 bg-muted rounded-full animate-pulse"
                    style={{ animationDelay: "1.3s" }}
                  ></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-28 animate-pulse" style={{ animationDelay: "1.4s" }}></div>
                    <div className="h-3 bg-muted rounded w-36 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function ProjectPage() {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [project, setProject] = useState<Project>(data)
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null)

  const handleExit=()=>{console.log("yaha exit to dashboard, NOT LOGOUT")}
  const handleEdit =()=>{console.log("yaha edit")}

  useEffect(()=>{
    console.log(data)
    const fetchProject = async () =>{
        setIsLoading(true);

        // yaha pe jwt token aaye ga, token defined nahi hai to comment kiya error nahi hai
       // if (!token) {
        //    console.error('No token found');
         //   setIsLoading(false);
        //    return;
        //  }

        try {
            const response = await axios.get(`${BASE_URL}/api/v1/projects/:id`, {
              headers: {
                Authorization: `Bearer token`,
              },
            });
    
            setProject(response.data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }


    }
    fetchProject();
  }, [])

  const leader = project?.members.find((member) => member.isLeader)
  const members = project?.members.filter((member) => !member.isLeader)
 
  const openFullscreen = (src: string, alt: string) => {
    setFullscreenImage({ src, alt })
  }
  if (isLoading) {
    return <ProjectPageSkeleton />
   }

   return (
    <div className="min-h-screen bg-background animate-in fade-in-0 duration-700">
      {/* Header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0">
            <div className="flex-1 animate-in slide-in-from-left-5 duration-500">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-balance">
                {project.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm sm:text-base">
                    Submitted: {new Date(project.submissionDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex flex-wrap gap-2 sm:gap-3 animate-in slide-in-from-right-5 duration-500"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform duration-200 bg-transparent"
              >
                <Edit className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExit}
                className="hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform duration-200 bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-2" />
                <Link to={'/'}>
                <span className="hidden sm:inline">Exit</span>
                </Link>
              </Button>
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform duration-200 bg-transparent"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </Button>
              )}
              {project.deployedUrl && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform duration-200"
                >
                  <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Project Overview */}
            <Card
              className="shadow-sm hover:shadow-md transition-shadow duration-300 animate-in slide-in-from-bottom-5"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {project.image && (
                  <div
                    className="aspect-video rounded-lg overflow-hidden bg-muted relative group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
                    onClick={() => openFullscreen(project.image!, project.title)}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-card-foreground leading-relaxed text-pretty text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs hover:scale-105 transition-transform duration-200 animate-in fade-in-0 hover:bg-purple-500 hover:text-white"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Technical Diagrams */}
            {(project.erDiagram || project.systemArchitecture) && (
              <Card
                className="shadow-sm hover:shadow-md transition-shadow duration-300 animate-in slide-in-from-bottom-5"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Technical Documentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8">
                  {project.erDiagram && (
                    <div className="animate-in slide-in-from-left-3 duration-500" style={{ animationDelay: "0.6s" }}>
                      <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 mb-4">
                        <Database className="h-4 w-4 sm:h-5 sm:w-5" />
                        ER Diagram
                      </h3>
                      <div
                        className="aspect-video rounded-lg overflow-hidden bg-muted border relative group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
                        onClick={() => openFullscreen(project.erDiagram!, "ER Diagram")}
                      >
                        <img
                          src={project.erDiagram || "/placeholder.svg"}
                          alt="ER Diagram"
                          className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Maximize2 className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.systemArchitecture && (
                    <div className="animate-in slide-in-from-left-3 duration-500" style={{ animationDelay: "0.7s" }}>
                      <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 mb-4">
                        <Network className="h-4 w-4 sm:h-5 sm:w-5" />
                        System Architecture
                      </h3>
                      <div
                        className="aspect-video rounded-lg overflow-hidden bg-muted border relative group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
                        onClick={() => openFullscreen(project.systemArchitecture!, "System Architecture")}
                      >
                        <img
                          src={project.systemArchitecture || "/placeholder.svg"}
                          alt="System Architecture"
                          className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <Maximize2 className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-in slide-in-from-right-5 duration-500" style={{ animationDelay: "0.5s" }}>
            {/* Team Information */}
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Team Leader */}
                {leader && (
                  <div className="animate-in slide-in-from-right-3 duration-500" style={{ animationDelay: "0.8s" }}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Team Leader
                    </h4>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 hover:scale-110 transition-transform duration-200">
                        <AvatarImage src={leader.avatar || "/placeholder.svg"} alt={leader.name} />
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs sm:text-sm">
                          {leader.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm sm:text-base">{leader.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {leader.department} • Class of {leader.graduationYear}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{leader.email}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Other Members */}
                {members.length > 0 && (
                  <div className="animate-in slide-in-from-right-3 duration-500" style={{ animationDelay: "0.9s" }}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Members ({members.length})</h4>
                    <div className="space-y-3">
                      {members.map((member, index) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-in slide-in-from-right-2"
                          style={{ animationDelay: `${1 + index * 0.1}s` }}
                        >
                          <Avatar className="h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-200">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{member.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {member.department} • Class of {member.graduationYear}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">{member.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mentor Information */}
            <Card
              className="shadow-sm hover:shadow-md transition-shadow duration-300 animate-in slide-in-from-right-3 "
              style={{ animationDelay: "1.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  Mentor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 hover:scale-110 transition-transform duration-200">
                    <AvatarImage src={project.mentor.avatar || "/placeholder.svg"} alt={project.mentor.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {project.mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base">{project.mentor.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{project.mentor.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <FullscreenModal
          src={fullscreenImage.src}
          alt={fullscreenImage.alt}
          isOpen={!!fullscreenImage}
          onClose={() => setFullscreenImage(null)}
        />
      )}
    </div>
  )
}