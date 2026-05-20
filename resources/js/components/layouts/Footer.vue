<template>
    <footer class="footer">
        <div class="footer-inner">
            <strong class="footer-left">
                Copyright &copy; {{ new Date().getFullYear() }}
                <a class="footer-link" href="javascript:" title="Advance Management System" target="_blank">WC-T20</a>
            </strong>

            <span class="footer-right">Developed by MIS</span>
        </div>
    </footer>
</template>

<style scoped>
.footer{
    width: 100%;
    color: #ffffff;

    /* ✅ webview/iOS safe area bottom */
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    box-sizing: border-box;

    border-top: 1px solid rgba(0,0,0,0.08);
    left:0 !important;
    background: #10044a;
    /*height: 10px !important;*/
}

.footer-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    /* ✅ prevents breaking */
    flex-wrap: wrap;
    min-width: 0;
}

.footer-left,
.footer-right{
    font-size: 13px;
    line-height: 1.3;
    min-width: 0;
    word-break: break-word;
}

.footer-link{
    color: inherit;
    text-decoration: none;
    font-weight: 800;
    margin-left: 6px;
}
.footer-link:hover{
    text-decoration: underline;
}

/* ✅ Mobile: stack centered */
@media (max-width: 600px){
    .footer-inner{
        justify-content: center;
        text-align: center;
    }
    .footer-right{
        width: 100%;
    }
}
</style>
