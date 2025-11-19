import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-left-group">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="https://cloud.duapp.dev/f/OYu2/Ys3tn9wT_dct-logo.png" alt="dct-logo" />
              </div>
              <span>典创工作室</span>
            </div>
            <p>代码与梦想，自由生长。汇聚热爱编程的学子，在技术的世界里探索无限可能。</p>

            <div className="footer-links-group">
              <h4>友情链接</h4>
              <ul>
                <li><a href="https://qm.qq.com/cgi-bin/qm/qr?k=Y9XgCa9SyryugaAEqjm1i_CtI-cHenP6&jump_from=webapi&authKey=AiaPPy7DDEmKLfMDgVD4er1hVNq4h0HciXudWTlxhVp5SZLcusQN3yc7DPzeWRrS" target="_blank" rel="noopener noreferrer">加入我们!</a></li>
                <li><a href="https://github.com/lDuang/dct-web" target="_blank" rel="noopener noreferrer">Web-repo:欢迎提PR参与贡献</a></li>
                <li><a href="https://blog.coderpath.me" target="_blank" rel="noopener noreferrer">WangXv-Blog</a></li>
                <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
                <li><a href="https://gitee.com/tangjiaxin188/rs-video-server" target="_blank" rel="noopener noreferrer">基于rocket的rust视频服务器</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-section footer-right-group">
            <div className="footer-sub-section">
              <h4>技术领域</h4>
              <ul>
                <li>前端开发</li>
                <li>后端开发</li>
                <li>嵌入式系统</li>
                <li>算法竞赛</li>
              </ul>
            </div>
            <div className="footer-sub-section">
              <h4>联系我们</h4>
              <ul>
                <li>QQ群：715940323</li>
                <li>邮箱：outside@duapp.dev</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 典创工作室. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
