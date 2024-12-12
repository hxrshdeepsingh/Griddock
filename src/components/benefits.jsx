import { CheckCircle, Shield, Zap } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Why Choose BentoApp?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the benefits of using our platform for all your file
              management needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Fast and Efficient</h3>
            <p className="text-sm text-muted-foreground">
              Upload and access your files quickly with our optimized platform.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure Storage</h3>
            <p className="text-sm text-muted-foreground">
              Your files are encrypted and stored securely in our cloud
              infrastructure.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Easy Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Share files and folders with your team or clients effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
