import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProjectFormSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-in fade-in-0 duration-700">
      {/* Header Skeleton */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between animate-in slide-in-from-left-5 duration-500">
            <div className="flex-1">
              <div className="h-8 sm:h-10 bg-muted rounded-lg w-1/2 mb-2 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-3/4 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
            </div>
            <div className="h-10 w-20 bg-muted rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Project Details Skeleton */}
          <Card className="shadow-sm animate-in slide-in-from-bottom-5 duration-500">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Title field */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              </div>

              {/* Description field */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-32 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                <div className="h-24 bg-muted rounded animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>

              {/* Two column fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-20 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "0.7s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-28 animate-pulse" style={{ animationDelay: "0.8s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "0.9s" }}></div>
                </div>
              </div>

              {/* URL field */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-36 animate-pulse" style={{ animationDelay: "1.0s" }}></div>
                <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "1.1s" }}></div>
              </div>

              {/* Tech stack */}
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-20 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
                <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "1.3s" }}></div>
                <div className="flex gap-2">
                  <div
                    className="h-6 w-16 bg-muted rounded-full animate-pulse"
                    style={{ animationDelay: "1.4s" }}
                  ></div>
                  <div
                    className="h-6 w-20 bg-muted rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div
                    className="h-6 w-14 bg-muted rounded-full animate-pulse"
                    style={{ animationDelay: "1.6s" }}
                  ></div>
                </div>
              </div>

              {/* File upload fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "1.7s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "1.8s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-32 animate-pulse" style={{ animationDelay: "1.9s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "2.0s" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Leader Skeleton */}
          <Card className="shadow-sm animate-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-20 animate-pulse" style={{ animationDelay: "2.1s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "2.2s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "2.3s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "2.4s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-20 animate-pulse" style={{ animationDelay: "2.5s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "2.6s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-28 animate-pulse" style={{ animationDelay: "2.7s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "2.8s" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Skeleton */}
          <Card className="shadow-sm animate-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="h-6 bg-muted rounded w-36 animate-pulse"></div>
                <div className="h-8 w-24 bg-muted rounded animate-pulse" style={{ animationDelay: "2.9s" }}></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div
                  className="h-4 bg-muted rounded w-64 mx-auto animate-pulse"
                  style={{ animationDelay: "3.0s" }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Mentor Skeleton */}
          <Card className="shadow-sm animate-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "3.1s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "3.2s" }}></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-24 animate-pulse" style={{ animationDelay: "3.3s" }}></div>
                  <div className="h-10 bg-muted rounded animate-pulse" style={{ animationDelay: "3.4s" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button Skeleton */}
          <div
            className="flex justify-end animate-in slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="h-12 w-32 bg-muted rounded animate-pulse" style={{ animationDelay: "3.5s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
