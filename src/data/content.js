export const content = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      resume: 'Resume',
      contact: 'Contact',
      language: '中文',
    },
    hero: {
      name: 'Yancheng “Macy” Xiang',
      headline: 'Incoming CS Graduate Student @ UIUC',
      subtitle: 'B.S. Computer Science, University of Wisconsin–Madison',
      intro:
        'I build AI-powered and data-driven software systems, with experience in RAG chatbots, full-stack web applications, and applied AI workflows.',
      note: 'Yancheng is pronounced roughly “YAHN-chung.” I also go by Macy.',
      interests:
        'AI systems, retrieval-augmented generation, full-stack software, data-driven applications, and human-centered tools.',
    },
    links: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Resume',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am a Computer Science student at the University of Wisconsin–Madison and an incoming CS graduate student at UIUC. My work is centered on AI systems and practical software engineering: building tools that connect data, retrieval, automation, and user-facing interfaces.',
        'Recently, I worked on a Slack AI chatbot for PBS Wisconsin, where I helped build a retrieval-based system for internal project and staff information. I have also worked on full-stack mini programs, e-commerce and membership systems, SEO/data automation, and applied AI content workflows.',
      ],
    },
    educationTitle: 'Education',
    selectedWork: 'Selected Work',
    primaryExperience: 'Primary Technical Experience',
    additionalExperience: 'Additional Leadership & Product Experience',
    skillsTitle: 'Skills',
    resumeTitle: 'Resume',
    resumeButton: 'Resume of Yancheng',
    contactTitle: 'Contact',
    contactText: 'I am open to conversations about AI systems, software engineering, graduate study, and internship opportunities.',
  },
  zh: {
    nav: {
      about: '关于',
      projects: '项目',
      experience: '经历',
      resume: '简历',
      contact: '联系',
      language: 'EN',
    },
    hero: {
      name: '项彦程 / Macy Xiang',
      headline: '即将入读 UIUC 计算机科学研究生',
      subtitle: '威斯康星大学麦迪逊分校 计算机科学本科',
      intro:
        '我主要关注 AI 系统、全栈软件和数据驱动应用，做过 RAG Slack 机器人、全栈小程序、前端业务系统和应用型 AI 工作流。',
      note: '“Yancheng” 可以近似读作 “YAHN-chung”，也可以直接叫我 Macy。',
      interests: 'AI 系统、检索增强生成、全栈软件、数据驱动应用和以人为中心的工具。',
    },
    links: {
      email: '邮箱',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: '简历',
    },
    about: {
      title: '关于',
      paragraphs: [
        '我目前是威斯康星大学麦迪逊分校计算机科学本科生，即将入读 UIUC 计算机科学研究生。我的方向更偏 AI 系统和实际软件工程：把数据、检索、自动化和用户界面连接起来，做成真正能被使用的工具。',
        '最近我参与了 PBS Wisconsin 的 Slack AI Chatbot 项目，负责构建基于检索的内部信息问答系统。我也做过全栈微信小程序、电商和会员系统、SEO/数据自动化，以及应用型 AI 内容工作流。',
      ],
    },
    educationTitle: '教育',
    selectedWork: 'Selected Work',
    primaryExperience: '主要技术经历',
    additionalExperience: '补充领导力与产品经历',
    skillsTitle: '技能',
    resumeTitle: '简历',
    resumeButton: 'Resume of Yancheng',
    contactTitle: '联系',
    contactText: '欢迎联系我交流 AI 系统、软件工程、研究生学习和实习机会。',
  },
}

export const profileLinks = {
  email: 'mailto:macyxiang123@gmail.com',
  github: 'https://github.com/macyxiangA',
  linkedin: 'https://www.linkedin.com/in/macyxiang/',
  resume: '/Resume_of_Yancheng.pdf',
}

export const education = {
  en: [
    {
      school: 'University of Illinois Urbana-Champaign',
      details: ['Incoming CS Graduate Student'],
    },
    {
      school: 'University of Wisconsin–Madison',
      details: ['B.S. in Computer Science', 'GPA: 3.85 / 4.00', 'Dean’s List: Spring 2022–2023, Fall 2023–2024'],
    },
    {
      school: 'Skidmore College',
      details: ['Undergraduate Study, 2021–2022'],
    },
  ],
  zh: [
    {
      school: '伊利诺伊大学厄巴纳-香槟分校',
      details: ['即将入读计算机科学研究生'],
    },
    {
      school: '威斯康星大学麦迪逊分校',
      details: ['计算机科学本科', 'GPA: 3.85 / 4.00', 'Dean’s List: Spring 2022–2023, Fall 2023–2024'],
    },
    {
      school: '斯基德莫尔学院',
      details: ['本科阶段学习，2021–2022'],
    },
  ],
}

export const projects = [
  {
    title: 'PBS Wisconsin Slack AI Chatbot',
    category: 'AI Systems / RAG',
    icon: 'AI',
    description: {
      en: 'An internal Slack chatbot for PBS Wisconsin that helps retrieve project and staff information from verified data sources.',
      zh: '为 PBS Wisconsin 开发的内部 Slack 问答机器人，用于从可信数据源中检索项目和员工相关信息。',
    },
    highlights: {
      en: [
        'Built a retrieval-based Slack Q&A workflow using Slack Bolt and Airtable.',
        'Implemented RAG-style query handling with structured data retrieval.',
        'Designed safe response behavior to reduce unsupported LLM answers.',
        'Focused on reliable internal information access rather than open-ended chatbot responses.',
      ],
      zh: [
        '使用 Slack Bolt 和 Airtable 构建内部问答流程。',
        '实现基于检索的 RAG 问答逻辑。',
        '设计安全回答机制，减少无依据的 LLM 输出。',
        '重点解决内部信息查找和项目管理场景。',
      ],
    },
    tech: ['Python', 'Node.js', 'Slack Bolt', 'Airtable', 'RAG', 'NLP', 'API Integration'],
  },
  {
    title: 'Applied AI Automation & Data Dashboard',
    category: 'Applied AI / Automation',
    icon: 'DA',
    description: {
      en: 'Applied AI and automation work involving SEO tracking, dashboard monitoring, prompt workflows, and text-quality checking for AI-generated outputs.',
      zh: '围绕 AI 产品增长和内容工作流，完成 SEO 数据追踪、仪表盘监控、Prompt 流程和 AI 输出质量检查。',
    },
    highlights: {
      en: [
        'Built Python SEO automation scripts with Semrush and Google Search Console APIs.',
        'Designed a Flask dashboard with REST endpoints and Matplotlib visualizations.',
        'Created AI-assisted content workflows using OpenAI API and Stable Diffusion.',
        'Used spaCy and Tesseract for OCR/NLP-based output quality checking.',
      ],
      zh: [
        '使用 Semrush 和 Google Search Console API 构建 Python SEO 自动化脚本。',
        '设计 Flask 仪表盘、REST 接口和 Matplotlib 可视化。',
        '使用 OpenAI API 和 Stable Diffusion 搭建 AI 辅助内容工作流。',
        '使用 spaCy 和 Tesseract 做 OCR/NLP 输出质量检查。',
      ],
    },
    tech: ['Python', 'Flask', 'REST APIs', 'OpenAI API', 'Stable Diffusion', 'spaCy', 'Tesseract', 'Matplotlib'],
  },
  {
    title: 'HLMR Full-Stack WeChat Mini Program',
    category: 'Full-Stack Application',
    icon: 'FS',
    description: {
      en: 'A full-stack e-commerce WeChat Mini Program and membership system for HLMR Skincare.',
      zh: '为 HLMR Skincare 开发和维护电商微信小程序与会员积分系统。',
    },
    highlights: {
      en: [
        'Built mini program pages using WXML, WXSS, and JavaScript.',
        'Implemented Node.js REST APIs for membership and reward points workflows.',
        'Integrated WeChat Login API and token-based session management.',
        'Improved product gallery performance with component-based architecture and lazy loading.',
      ],
      zh: [
        '使用 WXML、WXSS 和 JavaScript 构建小程序页面。',
        '实现会员和积分流程相关的 Node.js REST API。',
        '集成微信登录 API 和 token-based session 管理。',
        '通过组件化和懒加载优化商品展示性能。',
      ],
    },
    tech: ['JavaScript', 'WXML', 'WXSS', 'Node.js', 'REST APIs', 'WeChat Mini Program'],
  },
  {
    title: 'Custom Heap Memory Allocator',
    category: 'Systems / C',
    icon: 'C',
    description: {
      en: 'A custom dynamic memory allocator in C that implements aligned allocation, best-fit placement, block splitting, coalescing, and memory safety testing.',
      zh: '使用 C 实现自定义动态内存分配器，包含内存对齐、best-fit 分配、block splitting、coalescing 和内存安全测试。',
    },
    highlights: {
      en: [
        'Built a shared library implementation of heap allocation behavior.',
        'Implemented 8-byte alignment and best-fit allocation.',
        'Added block splitting and immediate coalescing.',
        'Tested memory safety using Make and Valgrind.',
      ],
      zh: [
        '实现 heap allocation 行为的 shared library。',
        '实现 8-byte alignment 和 best-fit allocation。',
        '加入 block splitting 和 immediate coalescing。',
        '使用 Make 和 Valgrind 测试内存安全。',
      ],
    },
    tech: ['C', 'Linux', 'Make', 'Valgrind', 'Memory Management'],
  },
  {
    title: 'Liaoning Expressway Points Platform',
    category: 'Frontend / Business Systems',
    icon: 'WEB',
    description: {
      en: 'An O2O points platform for expressway service areas, covering supplier management, order workflows, settlement, and pickup address modules.',
      zh: '面向高速服务区场景的 O2O 积分平台，负责供应商、订单、结算和自提地址等业务模块。',
    },
    highlights: {
      en: [
        'Built supplier and service-area management workflows.',
        'Implemented order management interfaces with multiple order states.',
        'Supported frontend-backend integration, filtering, editing, and popup workflows.',
        'Worked with real business modules and production-style requirements.',
      ],
      zh: [
        '构建供应商和服务区管理流程。',
        '实现包含多种订单状态的订单管理界面。',
        '支持前后端联调、筛选、编辑和弹窗流程。',
        '参与真实业务模块和生产风格需求开发。',
      ],
    },
    tech: ['Vue2', 'React', 'Vite', 'JavaScript', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Madison Hiking Guide',
    category: 'React Web App',
    icon: 'RE',
    description: {
      en: 'A React/Vite web app for exploring Madison hiking trails and saving liked trails locally.',
      zh: '一个 React/Vite 徒步路线浏览网站，支持查看路线详情和本地保存喜欢的路线。',
    },
    highlights: {
      en: [
        'Built user-facing trail browsing and detail pages.',
        'Refactored course-specific authentication into localStorage-based user data.',
        'Prepared the project for public portfolio deployment.',
      ],
      zh: [
        '构建面向用户的路线浏览和详情页面。',
        '将课程特定认证改为基于 localStorage 的本地用户数据。',
        '整理项目以适合公开作品集部署。',
      ],
    },
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'localStorage', 'GitHub Pages'],
  },
  {
    title: 'Rume of Ruin VR Escape Room',
    category: 'Creative Technology',
    icon: 'VR',
    description: {
      en: 'A Unity VR escape room project featuring puzzle interaction and environmental storytelling.',
      zh: '一个 Unity VR 密室逃脱项目，包含武器匹配谜题、交互反馈和环境装饰。',
    },
    highlights: {
      en: [
        'Designed and implemented the armor room weapon-matching puzzle.',
        'Added success/failure feedback text and interaction logic.',
        'Built interactable and breakable decorative objects.',
      ],
      zh: [
        '设计并实现 armor room 武器匹配谜题。',
        '加入成功/失败反馈文本和交互逻辑。',
        '制作可交互和可破坏的装饰物件。',
      ],
    },
    tech: ['Unity', 'C#', 'Meta Quest', 'XR Interaction Toolkit'],
  },
]

export const experience = [
  {
    role: 'Software Engineering / AI Systems Intern',
    organization: 'PBS Wisconsin',
    period: '2026',
    summary: {
      en: 'Worked on an internal Slack AI chatbot using Slack Bolt, Airtable, RAG-style retrieval, and safe response behavior for project and staff information access.',
      zh: '参与内部 Slack AI Chatbot 项目，使用 Slack Bolt、Airtable 和 RAG-style retrieval 构建项目与员工信息问答流程。',
    },
    tags: ['RAG', 'Slack Bolt', 'Airtable', 'NLP', 'APIs'],
  },
  {
    role: 'AI Product Intern',
    organization: 'Hangzhou Xinxiang Infinite Technology Co., Ltd.',
    period: 'Jun 2025 – Sep 2025',
    summary: {
      en: 'Built applied AI automation workflows, SEO scripts, Flask dashboards, OpenAI/Stable Diffusion content tooling, and OCR/NLP quality checks.',
      zh: '参与应用型 AI 自动化、SEO 脚本、Flask 仪表盘、OpenAI/Stable Diffusion 内容工具和 OCR/NLP 质量检查。',
    },
    tags: ['Python', 'Flask', 'OpenAI API', 'SEO', 'OCR'],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Shanghai Yating Biotechnology Co., Ltd. / HLMR Skincare',
    period: 'Nov 2024 – May 2025',
    summary: {
      en: 'Built and maintained a full-stack WeChat Mini Program, membership system, product catalog, reward points workflows, and authentication.',
      zh: '开发和维护全栈微信小程序、会员系统、商品目录、积分流程和用户认证。',
    },
    tags: ['Node.js', 'REST APIs', 'WeChat', 'JavaScript', 'Auth'],
  },
  {
    role: 'Frontend Intern',
    organization: 'Shanghai Qianjiang Network Co., Ltd.',
    period: 'May 2024 – Sep 2024',
    summary: {
      en: 'Worked on e-commerce and O2O points platforms, including supplier management, order workflows, settlement modules, and frontend-backend integration.',
      zh: '参与电商和 O2O 积分平台开发，包括供应商管理、订单流程、结算模块和前后端联调。',
    },
    tags: ['Vue2', 'React', 'JavaScript', 'REST APIs', 'MongoDB'],
  },
  {
    role: 'Software Engineer Intern',
    organization: 'Chengdu Jishan Health Co., Ltd.',
    period: 'Jun 2022 – Dec 2022',
    summary: {
      en: 'Supported e-commerce project development, internal maintenance, external delivery, testing, bug fixing, and project support.',
      zh: '参与电商项目开发、内部维护、外部交付、测试、bug 修复和项目支持。',
    },
    tags: ['Web', 'Testing', 'Delivery', 'Debugging'],
  },
]

export const additionalExperience = [
  {
    role: 'Founder',
    organization: 'HLMR Skincare',
    period: 'Apr 2024 – Present',
    summary: {
      en: 'Built an O2O skincare service model and managed client workflows, supply-chain coordination, community growth, and operations.',
      zh: '搭建 O2O 护肤服务模式，负责客户流程、供应链协调、社区增长和运营。',
    },
  },
  {
    role: 'CEO Associate',
    organization: 'China House / Global Citizen Action',
    period: 'Feb 2025 – Apr 2025',
    summary: {
      en: 'Redesigned NGO operational guidebooks, authored English reports, and supported communication workflows.',
      zh: '重写 NGO 运营手册，撰写英文报告，并支持沟通流程优化。',
    },
  },
  {
    role: 'Event Manager',
    organization: 'Wisconsin Union',
    period: 'Jan 2023 – Nov 2023',
    summary: {
      en: 'Supported large-scale campus event operations, logistics, audiovisual coordination, and cross-functional communication.',
      zh: '支持大型校园活动运营、物流、音视频协调和跨团队沟通。',
    },
  },
  {
    role: 'Global Mentor',
    organization: 'Skidmore College',
    period: '2022',
    summary: {
      en: 'Mentored international students and supported multicultural student programming.',
      zh: '辅导国际学生，并支持多元文化学生项目。',
    },
  },
]

export const skills = [
  { group: 'AI / ML', items: ['RAG', 'NLP', 'OpenAI API', 'Stable Diffusion', 'spaCy', 'Tesseract', 'Scikit-learn'] },
  { group: 'Software', items: ['Python', 'Java', 'C', 'JavaScript', 'Node.js', 'SQL'] },
  { group: 'Web / Full-Stack', items: ['React', 'Vue', 'Flask', 'REST APIs', 'HTML/CSS', 'Vite', 'WeChat Mini Program'] },
  { group: 'Data / Systems', items: ['MongoDB', 'MySQL', 'Redis', 'Linux', 'Make', 'Valgrind'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Docker', 'Figma', 'Jira', 'Matplotlib'] },
]
