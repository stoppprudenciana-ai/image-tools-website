// AI日语口语训练网站 - 交互脚本

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initAnimations();
    initInteractiveElements();
    initScrollEffects();
});

// 初始化动画效果
function initAnimations() {
    // 为功能卡片添加进入动画
    const featureCards = document.querySelectorAll('.feature-card');
    const progressCards = document.querySelectorAll('.progress-card');
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 设置初始状态并观察
    [...featureCards, ...progressCards, ...highlightItems].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 为统计数字添加计数动画
    animateStats();
}

// 统计数字动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('/');
        
        if (!isPercentage && !isTime) {
            const numericValue = parseInt(finalValue.replace(/,/g, ''));
            animateNumber(stat, 0, numericValue, 2000);
        }
    });
}

// 数字计数动画
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (difference * easeOutQuart));
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// 初始化交互元素
function initInteractiveElements() {
    // 学习提醒按钮交互
    const reminderButtons = document.querySelectorAll('.reminder-card .btn');
    reminderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const isYes = this.classList.contains('btn-success');
            showNotification(isYes ? '太棒了！继续保持学习热情！' : '没关系，现在开始也不晚！');
            
            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // 听力提升按钮交互
    const listeningButtons = document.querySelectorAll('.listening-card .btn');
    listeningButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const isAccept = this.classList.contains('btn-success');
            showNotification(isAccept ? '听力秘籍已投送！开始提升听力吧！' : '下次再来试试吧！');
            
            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // 功能卡片悬停效果
    const allCards = document.querySelectorAll('.feature-card, .progress-card, .highlight-item');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 导航链接交互
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 检查链接是否有实际的href值
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                // 有实际链接的，不阻止默认行为，允许跳转
                // 移除所有active类
                navLinks.forEach(l => l.classList.remove('active'));
                // 添加active类到当前点击的链接
                this.classList.add('active');
                
                // 添加点击波纹效果
                createRippleEffect(e, this);
                
                // 允许链接正常跳转
                return true;
            } else {
                // 没有实际链接的，阻止默认行为，只做交互效果
                e.preventDefault();
                
                // 移除所有active类
                navLinks.forEach(l => l.classList.remove('active'));
                // 添加active类到当前点击的链接
                this.classList.add('active');
                
                // 添加点击波纹效果
                createRippleEffect(e, this);
            }
        });
    });
    
    // 按钮点击波纹效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

// 创建波纹效果
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 初始化滚动效果
function initScrollEffects() {
    // 导航栏滚动效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // 添加背景透明度
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // 视差滚动效果
    const heroSection = document.querySelector('.hero-section');
    const wallPapers = document.querySelectorAll('.paper');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        wallPapers.forEach((paper, index) => {
            const speed = 0.5 + (index * 0.1);
            paper.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// 显示通知消息
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .navbar {
        transition: transform 0.3s ease, background 0.3s ease;
    }
    
    .feature-card,
    .progress-card,
    .highlight-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .btn {
        transition: transform 0.15s ease;
    }
    
    .btn:active {
        transform: scale(0.95);
    }
`;

document.head.appendChild(style);

// 页面加载完成后的额外初始化
window.addEventListener('load', function() {
    // 添加页面加载完成的类
    document.body.classList.add('loaded');
    
    // 预加载关键资源
    preloadResources();
});

// 打开单词库系统
function openVocabularySystem() {
    window.location.href = 'vocabulary-system.html';
}

// 打开JLPT听力练习
function openJLPTListening() {
    alert('JLPT听力练习功能正在开发中，敬请期待！');
    // 后续可以链接到具体的听力练习页面
}

// 打开AI助教
function openAIAssistant() {
    alert('AI助教功能正在开发中，敬请期待！');
    // 后续可以链接到AI助教页面
}

// 预加载资源
function preloadResources() {
    // 预加载字体图标
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'preload';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    fontAwesome.as = 'style';
    document.head.appendChild(fontAwesome);
    
    // 预加载Google字体
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'preload';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap';
    googleFonts.as = 'style';
    document.head.appendChild(googleFonts);
}

// 性能监控
function monitorPerformance() {
    // 监控页面加载性能
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// 初始化性能监控
monitorPerformance(); 