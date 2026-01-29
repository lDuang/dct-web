import { useEffect, useRef, useState } from 'react';

const quickLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '技术领域', href: '#tech' },
  { label: '荣誉墙', href: '#honor-wall' },
  { label: '竞赛与成长', href: '#achievements' },
  { label: '加入我们', href: '#join' },
];

const techAreas = ['前端开发', '后端开发', '嵌入式系统', '算法竞赛'];

const friendLinks = [
  { label: '加入我们!', href: 'https://qm.qqq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS' },
  { label: 'Web-repo:欢迎提PR参与贡献', href: 'https://github.com/lDuang/dct-web' },
  { label: 'WangXv-Blog', href: 'https://blog.coderpath.me' },
  { label: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
  { label: '基于rocket的rust视频服务器', href: 'https://gitee.com/tangjiaxin188/rs-video-server' },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef}>
      <div>
        <div>
          <div>
            <a href="#">
              <div>
                <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="DCT Logo" />
              </div>
              <span>典创工作室</span>
            </a>
            <p>
              代码与梦想，自由生长。汇聚热爱编程的学子，在技术的世界里探索无限可能。
            </p>
            <div>
              <h4>友情链接</h4>
              <ul>
                {friendLinks.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4>快速导航</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>技术领域</h4>
            <ul>
              {techAreas.map((area) => (
                <li key={area}>
                  <span>
                    <i className="fas fa-code" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <h5>联系我们</h5>
              <div>
                <p>
                  <i className="fab fa-qq" />
                  QQ群：715940323
                </p>
                <p>
                  <i className="fas fa-envelope" />
                  outside@duapp.dev
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>
              &copy; 2025 典创工作室. {保留所有权利}.
            </p>
            <div>
              <a href="https://github.com/lDuang/dct-web" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
              <a href="mailto:outside@duapp.dev">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
