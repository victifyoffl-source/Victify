import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, CheckCircle } from 'lucide-react';
import { MODULES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Courses = () => {
  const [selectedModule, setSelectedModule] = useState<typeof MODULES[0] | null>(null);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-4">
            Training Modules
          </h2>
          <div className="w-24 h-1 bg-[#7CB342] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed to take you from beginner to
            job-ready professional in 19-21 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow group flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={module.image_url}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/90 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[#7CB342] text-white">
                    Module {module.module_number}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#0B3D91]">
                    {module.title}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration_weeks} weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.syllabus.length} topics</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedModule(module)}
                    variant="outline"
                    className="w-full mt-auto border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#0B3D91]">
              Module {selectedModule?.module_number}: {selectedModule?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedModule?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedModule && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <Badge variant="secondary">
                  {selectedModule.duration_weeks} weeks
                </Badge>
                <Badge variant="secondary">
                  {selectedModule.syllabus.length} topics
                </Badge>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0B3D91] mb-3">
                  Syllabus
                </h3>
                <ul className="space-y-2">
                  {selectedModule.syllabus.map((topic, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0B3D91] mb-3">
                  Learning Outcomes
                </h3>
                <ul className="space-y-2">
                  {selectedModule.learning_outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Courses;