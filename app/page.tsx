import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Mail,
  Linkedin,
  ExternalLink,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Phone,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  BarChart3,
  Zap,
  Globe,
  Activity,
  Layers,
  GitBranch,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DM</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">Dev Modi</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Skills
            </Link>
            <Link href="#education" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Education
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                <Activity className="w-4 h-4 mr-2" />
                Available for New Opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Product & Project
                <span className="block text-yellow-300">Manager</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                I transform complex business challenges into streamlined solutions, leading cross-functional teams to
                deliver exceptional products that drive measurable business impact.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-blue-100">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-blue-100">
                  <Phone className="w-4 h-4 mr-2" />
                  628-724-2415
                </div>
                <div className="flex items-center text-blue-100">
                  <Mail className="w-4 h-4 mr-2" />
                  dmodi@sfsu.edu
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </div>

              <div className="flex space-x-4 mt-8">
                <Link
                  href="https://www.linkedin.com/in/dev-modi2415/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="https://devmodi.vercel.app/" className="text-blue-200 hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">User Feedback</div>
                  <div className="text-blue-100">Collected</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">35%</div>
                  <div className="text-blue-100">Team Efficiency</div>
                  <div className="text-blue-100">Improvement</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Platform</div>
                  <div className="text-blue-100">Uptime</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">1K+</div>
                  <div className="text-blue-100">Monthly</div>
                  <div className="text-blue-100">Users</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">Leading teams and delivering results across diverse industries</p>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Digital Project Manager</h3>
                        <p className="text-green-600 font-semibold">American Dog Society, San Francisco</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Aug 2024 - Present</span>
                      <Badge className="bg-green-100 text-green-800">Current</Badge>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Manage 10+ websites and digital platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Deliver projects 50% faster than benchmarks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Maintain 99.9% uptime for 10,000+ entries
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">GoDaddy</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game Development PM */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Project Manager – Game Development</h3>
                        <p className="text-blue-600 font-semibold">LawSchool AI, San Francisco</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Aug 2024 – Jan 2025</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Impact Metrics</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Team Efficiency</span>
                          <span className="font-semibold">+35%</span>
                        </div>
                        <Progress value={35} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>User Engagement</span>
                          <span className="font-semibold">200+ Students</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Feedback Collection</span>
                          <span className="font-semibold">500+ Responses</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Team Leadership</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        Led cross-functional team of 7 members
                      </li>
                      <li className="flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-blue-500" />
                        Managed agile sprint planning
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-blue-500" />
                        Conducted retrospectives & roadmap adjustments
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Manager Intern */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Product Manager Intern</h3>
                        <p className="text-purple-600 font-semibold">Glitter Fund, San Francisco</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Jun 2023 - Nov 2023</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Product Impact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-gray-700">Latency Reduction</span>
                        <span className="font-bold text-purple-600">25%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-gray-700">User Retention</span>
                        <span className="font-bold text-purple-600">+20%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Responsibilities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-purple-500 mt-1" />
                        Fintech analytics platform planning
                      </li>
                      <li className="flex items-start gap-2">
                        <Layers className="w-4 h-4 text-purple-500 mt-1" />
                        REST API integration optimization
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-purple-500 mt-1" />
                        User research & feedback analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Innovative solutions that drive business growth and user engagement</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Stock Predictor */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  AI-Powered Stock Predictor
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Machine learning platform for stock prediction with 1,000+ monthly active users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Monthly Users</span>
                    <span className="font-bold text-green-600">1,000+</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">Machine Learning</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Python</Badge>
                    <Badge className="bg-purple-100 text-purple-800">Product Owner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safe Walk Website */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Safe Walk Website</CardTitle>
                <CardDescription className="text-gray-600">
                  Real-time safety platform with 911 API integration for San Francisco community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">API Integrations</span>
                    <span className="font-bold text-blue-600">911 + Maps</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">API Integration</Badge>
                    <Badge className="bg-green-100 text-green-800">Google Maps</Badge>
                    <Badge className="bg-orange-100 text-orange-800">Figma</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workflow Automation */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  Workflow Automation Platform
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Enterprise automation solution reducing manual work by 80% across 5 departments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Efficiency Gain</span>
                    <span className="font-bold text-purple-600">80%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-800">15+ APIs</Badge>
                    <Badge className="bg-green-100 text-green-800">Automation</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Training</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-xl text-gray-600">Comprehensive skill set for modern product management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Product & Project Tools</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Notion
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Confluence
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Methodologies</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center">
                    Agile/Scrum
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Kanban
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    A/B Testing
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Design Thinking
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Foundation</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center">
                    Python
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    SQL
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    APIs
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Leadership Skills</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center">
                    Team Leadership
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    User Research
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Roadmapping
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    Problem Solving
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <p className="text-xl text-gray-600">Academic excellence and professional development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bachelor's in Computer Science</h3>
                    <p className="text-blue-600 font-semibold">San Francisco State University</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">Aug 2021 - May 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">GPA</span>
                    <Badge className="bg-green-100 text-green-800">3.9/4.0</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Honors</span>
                    <Badge className="bg-blue-100 text-blue-800">Dean's List (8x)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Professional Certifications</h3>
                    <p className="text-green-600 font-semibold">Industry Recognition</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Google Project Management Certificate</h4>
                    <p className="text-gray-600 text-sm">Nov 2024</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Product Development</Badge>
                      <Badge variant="secondary">Agile Methodologies</Badge>
                      <Badge variant="secondary">HCI</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Drive Innovation Together?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help transform your product vision into measurable business success through
            strategic leadership and execution excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 p-6 h-auto flex-col">
              <Mail className="w-6 h-6 mb-2" />
              <span className="font-semibold">Email Me</span>
              <span className="text-sm opacity-75">dmodi@sfsu.edu</span>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 p-6 h-auto flex-col bg-transparent"
            >
              <Phone className="w-6 h-6 mb-2" />
              <span className="font-semibold">Call Me</span>
              <span className="text-sm opacity-75">628-724-2415</span>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <Link
              href="https://www.linkedin.com/in/dev-modi2415/"
              className="text-blue-200 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href="https://devmodi.vercel.app/" className="text-blue-200 hover:text-white transition-colors">
              <Globe className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dev Modi. Crafted with passion for product excellence and team leadership.
          </p>
        </div>
      </footer>
    </div>
  )
}
