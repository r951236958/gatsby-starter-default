//import Prism from 'prismjs'
import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const CodeZone = () => (
  <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
    <pre className="language-shell">
      <code className="language-shell">
        <span className="token function">npm</span>{' '}
        <span className="token function">install</span> tailwindcss postcss
        autoprefixer
      </code>
    </pre>
  </div>
)

const htmlCode = `<pre><code class="language-pug" data-dependencies="less">
:less
	foo {
		color: @red;
	}
</code><pre>
`

const npminstallCode = `npm install tailwindcss postcss autoprefixer`

const markdownCode = `The C# code will be highlighted __after__ the rest of this document.

\`\`\`csharp
public class Foo : IBar<int> {
	public string Baz { get; set; } = "foo";
}
\`\`\`

The CSS code will be highlighted with this document because CSS has already been loaded.

\`\`\`css
a:hover {
	color: green !important;
}
\`\`\`
`

const About = () => {
  //React.useEffect(() => {
  //  Prism.highlightAll()
  //}, [])

  return (
    <Layout>
      <SEO title="About" />

      <div className="relative w-full px-4">
        <div className="py-10">
          <h1 className="text-5xl text-center text-white">About Page</h1>
        </div>
        <div className="bg-gray-900 bg-opacity-70">
          <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            
            <Hero />
           
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About