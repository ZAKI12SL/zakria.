const trans={
en: {
		home: 'Home',
		about: 'About Me',
		projects: 'Projects',
		contact: 'Contact',
		title: 'My Projects',
		subtitle: 'These videos are a small sample of the work I can do. For each video, I\'ve included the title, description, and estimated time.',
		p1title: 'The danger of games for children!!',
		p2title: 'Partnership Offer',
		p3title: 'The virtue of the Qur’an',
		p4title: 'Mincrafet Challenge',
		duration: 'Duration: none',
		work: 'Role: Video Editing',
		p1desc: ' This video illustrates the dangers of games for children. Here, I didn\'t  on the graphics, but rather on the cuts. This was one of my old videos; I spent 5 hours on it. videos ',
		p2desc: 'This video showcases my experience in graphic design and is considered one of the most laborious videos I\'ve ever made , I spent two days on it',
		p3desc: ' A smoothly polished podcast montage, focused on sound, with light design layers; I spent 8 hours on it',
		p4desc: 'High-energy, low-creativity montage, designed to grab attention and lean towards extreme simplicity, with sound and motion design that took 4 hours to complete.'
	},
	ar: {
		home: 'الرئيسية',
		about: 'من أنا',
		projects: 'مشاريعي',
		contact: 'تواصل معي',
		title: 'المشاريع الخاصة بي',
		subtitle: 'هذه الفيدوهات هي نبذة صغيرة من العمل الذي يمكنني تأديته ،وضعت لك لكل فيدو ، العنوان ، الوصف ،ومدة العمل فيه ',
		p1title: '!!خطر الألعاب على الأطفال',
		p2title: 'عرض الشراكة ',
		p3title: 'فضل القرآن',
		p4title: 'تحدي ماينكرافت',
		duration: 'المدة: غير مذكورة ',
		work: 'الدور: مونتاج فيديو',
		p1desc: 'هذا الفيديو يوضح خطر الألعاب على الأطفال ، هنا لم أركز على الجرافيك ، بل ركزت أكثر على القصات "كاتس" ، وهذا كان من أحد فيديوهاتي القديمة، بقيت فيه ل 5 ساعات .',
		p2desc: 'هذا الفيديو الذي يوضح خبراتي في الجرافيك ديزاين و يعتبر من الفيدوهات المتعوب عليها، بقيت فيها لمدة يومين',
		p3desc: 'مونتاج بودكاست مصقول بسلاسة، ركزت على الصوت، وطبقات ديزاين خفيفة ، بقيت فيه 8 ساعات .',
		p4desc: 'مونتاج عالي الطاقة، وقليل الإبداع ،مصمم لجذب الإنتباه و إلى البساطة العالية ، وتصميم صوتي وحركة بقيت فيه 4 ساعات'
	}    
};
  let currentLang=localStorage.getItem('zak_lang')||'en';
  let currentTheme=localStorage.getItem('zak_theme')||'light';
  function applyLang(lang){document.documentElement.lang=lang;document.body.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-tr]').forEach(el=>{const key=el.dataset.tr;if(trans[lang][key]) el.innerHTML=trans[lang][key];});localStorage.setItem('zak_lang',lang);}  
  function applyTheme(theme){document.body.dataset.theme=theme;document.querySelector('.theme-btn').innerText=theme==='dark'?'Light':'Dark';localStorage.setItem('zak_theme',theme);}  
  function toggleLang(){currentLang=currentLang==='en'?'ar':'en';applyLang(currentLang);}  
  function toggleTheme(){currentTheme=currentTheme==='dark'?'light':'dark';applyTheme(currentTheme);}  
  function createRing(e){const ring=document.createElement('span');ring.className='click-ring';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';document.body.appendChild(ring);setTimeout(()=>ring.remove(),450);}  
  document.addEventListener('click',e=>{if(e.target.closest('.nav-btn,.pill'))createRing(e);});
  const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});},{threshold:.15});document.querySelectorAll('.card').forEach(c=>obs.observe(c));
  applyTheme(currentTheme);applyLang(currentLang);