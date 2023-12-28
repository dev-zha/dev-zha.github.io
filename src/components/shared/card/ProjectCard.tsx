// 'use client';

// import { TbExternalLink } from 'react-icons/tb';
// import { Project } from '@/types/project';
// import Chip from '../Chip';
// import Link from 'next/link';
// import { useRef } from 'react';
// import { useInView } from 'framer-motion';

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   return (
//     <Link
//       ref={ref}
//       href={`/projects/${project.id}`}
//       className="group relative w-full h-80 bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/10 hover:scale-[101%] transition ease-in overflow-hidden cursor-pointer"
//       style={{
//         transform: isInView ? 'none' : 'translateY(100px)',
//         opacity: isInView ? 1 : 0,
//         transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
//       }}
//     >
//       <img
//         src={project.image}
//         alt={`${project.title} - Cover`}
//         className="h-full w-full object-cover"
//       />
//       <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 via-black/20 via-50% group-hover:to-black/30">
//         <div className="flex h-full flex-col justify-end p-5">
//           <h6 className="text-gray-100 text-xl font-bold line-clamp-2">
//             {project.title}
//           </h6>
//           <p className="text-neutral-300 text-xs font-medium font-mono line-clamp-3 mt-1">
//             {project.description}
//           </p>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {project.tags?.map((tag) => (
//               <Chip
//                 key={tag}
//                 className="bg-neutral-600/50 text-primary border-primary"
//               >
//                 {tag}
//               </Chip>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="opacity-0 absolute right-5 top-5 group-hover:opacity-100 transition ease-in">
//         <TbExternalLink className="w-6 h-6 stroke-white" />
//       </div>
//     </Link>
//   );
// }


import { TbExternalLink } from 'react-icons/tb';
import { Project } from '@/types/project';
import Chip from '../Chip';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative w-full h-80 bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/10 hover:scale-[101%] transition ease-in overflow-hidden cursor-pointer"
    >
      <img
        src={project.image}
        alt={`${project.title} - Cover`}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 via-black/20 via-50% group-hover:to-black/30">
        <div className="flex h-full flex-col justify-end p-5">
          <h6 className="text-gray-100 text-xl font-bold line-clamp-2">
            {project.title}
          </h6>
          <p className="text-neutral-300 text-xs font-medium font-mono line-clamp-3 mt-1">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Chip
                key={tag}
                className="bg-neutral-600/50 text-primary border-primary"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="opacity-0 absolute right-5 top-5 group-hover:opacity-100 transition ease-in">
        <TbExternalLink className="w-6 h-6 stroke-white" />
      </div>
    </Link>
  );
}
