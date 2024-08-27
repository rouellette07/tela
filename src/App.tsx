import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, FileText, Layers, Wallet, Github, BookOpen, Home, Server } from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeSnippet = `
import tela

# Create a new Tela wallet
wallet = tela.Wallet()

# Create a new DOC
doc = tela.DOC("<html><body><h1>Hello, Tela!</h1></body></html>")

# Create an INDEX and add the DOC
index = tela.INDEX()
index.add_doc(doc)

# Serve the content
tela.serve(index, port=8080)
`

const pages = ['Home', 'Technology', 'Use Cases', 'Documentation', 'Community']

export default function Component() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activePage, setActivePage] = useState('Home')

  const pageContent = {
    'Home': (
      <div className="space-y-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">Tela by Civilware: Revolutionizing Real-Time Collaboration and Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">In the fast-paced world of modern software development, effective communication and seamless collaboration are the bedrock of innovation. Tela by Civilware is designed to bridge the gap between code and communication, empowering developers, teams, and organizations to achieve new heights in productivity and efficiency.</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">How Tela Works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tela is a cutting-edge technology that integrates seamlessly into your existing development environment, providing a suite of tools designed to facilitate real-time communication and collaboration. At its core, Tela functions as a powerful message-passing framework, allowing for the efficient exchange of information between different components of your application.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enhanced Real-Time Collaboration</li>
                <li>Improved Debugging and Monitoring</li>
                <li>Scalability Without Complexity</li>
                <li>Seamless Integration with Existing Tools</li>
                <li>Future-Proofing Your Development Workflow</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
    'Technology': (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="install">Install</TabsTrigger>
          <TabsTrigger value="serve">Serve</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">Tela: A Gateway to Decentralized Web Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tela is a decentralized framework designed to store and execute web applications on the DERO blockchain. Unlike traditional web applications, which rely on centralized servers and are susceptible to control, censorship, and data breaches, Tela offers a robust alternative where applications are decentralized, secure, and resilient.</p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                      <Wallet className="mr-2 text-green-500" />
                      Wallet
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">The Tela wallet is the core component for managing your decentralized web presence. It stores your digital identity, manages your content, and interacts with the Tela network.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                      <FileText className="mr-2 text-green-500" />
                      DOC & INDEX
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">DOCs (Documents) are the building blocks of Tela websites, while INDEX files organize and structure your content. Both are cryptographically signed and verified.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="install" className="space-y-4">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">Installation Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Install Tela CLI: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">pip install tela-cli</code></li>
                    <li>Create a new Tela wallet: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela wallet create</code></li>
                    <li>Create DOC (HTML, CSS, JS) using your preferred editor</li>
                    <li>Use Tela CLI to generate DOC SCID: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela doc create path/to/doc.html</code></li>
                    <li>Create INDEX file: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela index create</code></li>
                    <li>Add DOCs to INDEX: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela index add-doc &lt;DOC_SCID&gt;</code></li>
                    <li>Generate INDEX SCID: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela index publish</code></li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">Code Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <SyntaxHighlighter language="python" style={atomDark}>
                    {codeSnippet}
                  </SyntaxHighlighter>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="serve" className="space-y-4">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">Serving Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Start Tela server: <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">tela serve &lt;INDEX_SCID&gt; --port 8080</code></li>
                    <li>Tela spawns a local HTTP server</li>
                    <li>Server retrieves INDEX from your wallet</li>
                    <li>When a browser requests content, the server:
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Retrieves necessary DOCs from the INDEX</li>
                        <li>Verifies the integrity of DOCs</li>
                        <li>Serves the content to the browser</li>
                      </ul>
                    </li>
                    <li>Browser renders the Tela-powered website</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    ),
    'Use Cases': (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">Tela Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Decentralized Content Delivery Networks (CDNs)</li>
              <li>Secure and Private Web Applications</li>
              <li>Immutable and Transparent Governance Tools</li>
              <li>Censorship-Resistant Platforms</li>
              <li>Decentralized Marketplaces</li>
              <li>Education and Certification Platforms</li>
              <li>Decentralized Social Networks</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Example: Decentralized Social Network</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Imagine a social network built on Tela, where users own their data and decide who can access it. Unlike traditional social networks, where user data is stored on central servers and often exploited for advertising purposes, a Tela-based social network would store data on the blockchain, accessible only by the user and those they choose to share it with. This could significantly enhance user privacy and reduce the risk of data breaches.</p>
          </CardContent>
        </Card>
      </div>
    ),
    'Documentation': (
      <div className="space-y-4">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">Tela Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Comprehensive guides and API references for Tela developers.</p>
            <Button variant="outline" asChild className="mt-4">
              <Link href="https://docs.tela.org">Visit Full Documentation</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    ),
    'Community': (
      <div className="space-y-4">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">Join the Tela Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Connect with other Tela developers, share your projects, and get help from the community.</p>
            <Button variant="outline" asChild className="mt-4">
              <Link href="https://community.tela.org">Join Tela Community Forum</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <Layers className="mr-2 text-green-500" />
              Tela
            </h1>
            <nav className="hidden md:flex space-x-4">
              {pages.map(page => (
                <Button
                  key={page}
                  variant={activePage === page ? "secondary" : "ghost"}
                  onClick={() => setActivePage(page)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {page}
                </Button>
              ))}
            </nav>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {pageContent[activePage]}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white shadow-inner mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 Tela Project. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layout4_20240824150725-rdSo0ssAKiVG7WFQwF2onxg1P48epW.webp"
          alt="Tela Architecture Diagram"
          className="w-64 h-auto cursor-pointer"
          onClick={() => {
            // Implement a modal or lightbox to show the full-size image
            alert("Tela Architecture Diagram: This image illustrates the process of creating and serving content using Tela, including the roles of the Wallet, DOC, INDEX, and Server components.")
          }}
        />
      </div>
    </div>
  )
}