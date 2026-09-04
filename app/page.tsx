import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Layers3,
  MapPin,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Truck,
  WalletCards,
  Zap,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-media">
          <video className="hero-video" autoPlay muted loop playsInline poster="/assets/product-video.png" aria-hidden="true">
            <source src="/assets/hero-blue-loop.mp4" type="video/mp4" />
          </video>
          <img
            className="hero-showcase"
            src="/assets/hero-reference-composite.png"
            alt="悬浮手机展示小程序引导页与输入验证码页"
          />
          <div className="site-shell hero-nav-shell">
            <nav className="nav-shell" aria-label="作品导航">
              <a className="brand" href="#top" aria-label="返回首页">
                <span className="brand-mark">M</span>
                <span>PORTFOLIO · 2025</span>
              </a>
              <div className="nav-links">
                <a href="#overview">项目概览</a>
                <a href="#experience">体验设计</a>
                <a href="#system">视觉系统</a>
              </div>
              <a className="contact-button" href="#contact">联系我 <ArrowDownRight size={16} /></a>
            </nav>
          </div>
        </div>

        <div className="hero-info">
          <div className="site-shell hero-info-shell">
            <div className="hero-copy">
              <div className="hero-title-block">
                <p className="eyebrow"><span />招商银行 × 中国电信 × 小天才</p>
                <h1>
                  招商银行新客礼遇
                  <span>小程序设计</span>
                </h1>
              </div>
              <div className="hero-detail-block">
                <p className="hero-intro">
                  将用户、银行、电信与手表厂商连接起来，打造从活动曝光到订单交付的完整转化体验。
                </p>
                <div className="hero-meta" aria-label="项目信息">
                  <div><small>ROLE</small><strong>UI / VISUAL DESIGN</strong></div>
                  <div><small>SCOPE</small><strong>MINI PROGRAM</strong></div>
                  <div><small>PLATFORM</small><strong>WECHAT</strong></div>
                </div>
              </div>
            </div>
            <a className="scroll-cue" href="#overview">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDownRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="overview-section" id="overview">
        <div className="section-kicker light">01 / PROJECT OVERVIEW</div>
        <div className="overview-head">
          <h2>一次跨品牌合作，<br />一条完整的转化闭环。</h2>
          <p>
            面向招商银行新客，以小天才儿童手表作为活动权益，通过微信小程序连接用户、银行、电信与硬件厂商，完成资格校验、商品申领、支付签约、物流交付及售后管理。
          </p>
        </div>
        <div className="partner-line" aria-label="合作方">
          <span>招商银行</span><i>×</i><span>中国电信</span><i>×</i><span>小天才</span>
        </div>
        <div className="overview-grid">
          <article><strong>01</strong><h3>营销触达</h3><p>以外部活动海报承接渠道曝光，聚焦利益点与申领入口。</p></article>
          <article><strong>02</strong><h3>资格与下单</h3><p>逐步拆解兑换码、信息填写与支付签约，降低理解成本。</p></article>
          <article><strong>03</strong><h3>履约管理</h3><p>将账单、发票、物流状态汇入统一入口，形成服务闭环。</p></article>
        </div>
      </section>

      <section className="challenge-section">
        <div className="section-kicker">02 / THE CHALLENGE</div>
        <div className="split-title">
          <h2>营销要有吸引力，<br />金融流程更要有确定性。</h2>
          <p>
            项目不是单纯的商品展示，而是一套涉及资格、支付、合规与履约的复杂流程。设计需要同时照顾用户的轻松感知与多方业务的严谨表达。
          </p>
        </div>
        <div className="challenge-cards">
          <article>
            <span><Zap size={22} />01</span>
            <h3>让价值一眼被看见</h3>
            <p>把联名礼遇、分期权益与产品卖点转化为清晰的第一视觉焦点。</p>
          </article>
          <article>
            <span><ShieldCheck size={22} />02</span>
            <h3>让复杂规则易于理解</h3>
            <p>用信息分组、状态反馈和逐步引导承载金融产品的合规信息。</p>
          </article>
          <article>
            <span><Layers3 size={22} />03</span>
            <h3>让多方系统保持一致</h3>
            <p>建立统一控件与页面模板，保证前后台协作和多状态交付效率。</p>
          </article>
        </div>
      </section>

      <section className="flow-section">
        <div className="section-kicker light">03 / USER JOURNEY</div>
        <div className="flow-title">
          <p>把活动流量转化为真实订单</p>
          <h2>EXPOSURE<br />TO DELIVERY</h2>
        </div>
        <div className="journey">
          {[
            ['01', '曝光', '渠道海报'],
            ['02', '浏览', '权益与卖点'],
            ['03', '提交申领', '校验与签约'],
            ['04', '订单管理', '账单 / 发票 / 物流'],
          ].map(([number, title, text], index) => (
            <article key={number}>
              <div className="journey-number">{number}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
              {index < 3 && <ArrowRight className="journey-arrow" aria-hidden="true" />}
            </article>
          ))}
        </div>
        <div className="flow-note">
          <span>DESIGN PRINCIPLE</span>
          <p>每一步只呈现当下最重要的信息，让用户始终知道“正在做什么、为什么、下一步是什么”。</p>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-kicker">04 / EXPERIENCE DESIGN</div>
        <div className="experience-head">
          <div><p>核心界面展示</p><h2>一套界面，贯穿申领与履约。</h2></div>
          <p>点击不同阶段，查看从活动资格到订单服务的完整移动端设计。</p>
        </div>
        <div className="case-tabs">
          <input className="tab-radio" type="radio" name="case-stage" id="tab-apply" defaultChecked />
          <input className="tab-radio" type="radio" name="case-stage" id="tab-manage" />
          <input className="tab-radio" type="radio" name="case-stage" id="tab-product" />
          <div className="case-tabs-list" role="tablist" aria-label="界面阶段">
            <label htmlFor="tab-apply" role="tab">01 申领下单</label>
            <label htmlFor="tab-manage" role="tab">02 订单管理</label>
            <label htmlFor="tab-product" role="tab">03 产品浏览</label>
          </div>
          <div className="tab-panels">
          <section className="tab-panel panel-apply">
            <div className="panel-copy">
              <span>APPLICATION FLOW</span>
              <h3>先确认资格，<br />再完成关键信息。</h3>
              <p>将兑换码校验、收货信息、商品确认和支付方式分层呈现，减少一次性输入带来的压力。</p>
              <ul><li><Check size={16} /> 强化当前任务</li><li><Check size={16} /> 明确结果反馈</li><li><Check size={16} /> 前置合规确认</li></ul>
            </div>
            <div className="device-stage two">
              <figure className="device"><img src="/assets/code-entry.png" alt="兑换码输入页面" /></figure>
              <figure className="device device-lower"><img src="/assets/order-submit.png" alt="订单提交页面" /></figure>
            </div>
          </section>
          <section className="tab-panel panel-manage">
            <div className="panel-copy">
              <span>ORDER MANAGEMENT</span>
              <h3>让每一种状态，<br />都能被快速确认。</h3>
              <p>账单、发票与物流统一使用卡片化信息结构，以蓝色表示服务状态，橙色强调金额与提醒。</p>
              <ul><li><WalletCards size={16} /> 分期账单</li><li><ReceiptText size={16} /> 发票申请</li><li><Truck size={16} /> 物流轨迹</li></ul>
            </div>
            <div className="device-stage three">
              <figure className="device"><img src="/assets/installment.png" alt="分期账单页面" /></figure>
              <figure className="device device-lower"><img src="/assets/invoice.png" alt="发票申请页面" /></figure>
              <figure className="device"><img src="/assets/logistics.png" alt="物流跟踪页面" /></figure>
            </div>
          </section>
          <section className="tab-panel product-panel panel-product">
            <div className="panel-copy">
              <span>PRODUCT STORY</span>
              <h3>让核心卖点，<br />在滑动中逐一展开。</h3>
              <p>首屏聚焦产品价值，用连续场景卡片呈现防水、定位、视频通话与零钱管理能力。</p>
            </div>
            <div className="feature-stack">
              <figure><img src="/assets/product-waterproof.png" alt="手表游泳级防水卖点" /></figure>
              <figure><img src="/assets/product-location.png" alt="手表九重 AI 定位卖点" /></figure>
              <figure><img src="/assets/product-video.png" alt="手表高清视频通话卖点" /></figure>
              <figure><img src="/assets/product-wallet.png" alt="手表零钱管理卖点" /></figure>
            </div>
          </section>
          </div>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-kicker">05 / VISUAL SYSTEM</div>
        <div className="system-head">
          <h2>亲子氛围感，<br />遇见金融秩序感。</h2>
          <p>以品牌蓝渐变建立可信而轻快的科技氛围，活力橙负责行动与金额提示。圆角白色卡片承载复杂信息，让营销视觉与业务可读性保持平衡。</p>
        </div>
        <div className="system-grid">
          <article className="palette-card">
            <div className="palette-title"><span>COLOR PALETTE</span><strong>明亮、可信、年轻</strong></div>
            <div className="swatches">
              <div className="swatch blue-start"><span>#2D5CED</span></div>
              <div className="swatch blue-end"><span>#1EA0FA</span></div>
              <div className="swatch orange"><span>#FD6E00</span></div>
              <div className="swatch sky"><span>#EAF6FF</span></div>
            </div>
          </article>
          <article className="component-card">
            <div className="component-title"><span>CORE COMPONENTS</span><strong>一致的操作反馈</strong></div>
            <div className="ui-demo">
              <button type="button">提交订单 <ArrowRight size={17} /></button>
              <label><i className="radio active" /> 招商银行信用卡分期 <b>推荐</b></label>
              <label><i className="radio" /> 微信支付</label>
              <div className="status-row"><em>审核通过</em><em>运输中</em><em>待扣款</em></div>
            </div>
          </article>
        </div>
        <div className="icon-rule">
          {[['01', '按钮'], ['02', '表单'], ['03', '弹窗'], ['04', '状态'], ['05', '导航']].map(([n, label]) => (
            <div key={n}><span>{n}</span><strong>{label}</strong><small>统一圆角 / 色彩 / 反馈</small></div>
          ))}
        </div>
      </section>

      <section className="campaign-section">
        <div className="campaign-poster-wrap">
          <div className="poster-window"><img src="/assets/campaign-poster.png" alt="儿童手表礼包活动引流长海报" /></div>
          <img className="campaign-cat" src="/assets/mascot-right.png" alt="佩戴儿童手表的小招喵 IP 形象" />
        </div>
        <div className="campaign-copy">
          <div className="section-kicker light">06 / CAMPAIGN VISUAL</div>
          <h2>先用情绪吸引，<br />再用信息说服。</h2>
          <p>海报采用夏日亲子场景建立轻松氛围，首屏突出“新客低价分期 + 联名礼包”的核心利益点，随后依次解释产品价值、电信套餐与活动流程。</p>
          <div className="poster-points">
            <div><ScanLine size={20} /><span><b>01</b>利益点前置</span></div>
            <div><MapPin size={20} /><span><b>02</b>长图分段阅读</span></div>
            <div><WalletCards size={20} /><span><b>03</b>领取入口重复露出</span></div>
          </div>
        </div>
      </section>

      <section className="closing-section" id="contact">
        <img src="/assets/mascot-left.png" alt="小招喵 IP 形象" />
        <div>
          <p>FINAL OUTCOME</p>
          <h2>让复杂的协作，<br />成为简单的体验。</h2>
          <div className="outcome-tags"><span>统一视觉语言</span><span>完整转化路径</span><span>多方流程可视化</span></div>
        </div>
        <img src="/assets/mascot-right.png" alt="挥手的小招喵 IP 形象" />
      </section>

      <footer>
        <span>招商银行 × 中国电信 × 小天才</span>
        <span>MINI PROGRAM UI/UX CASE STUDY</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
