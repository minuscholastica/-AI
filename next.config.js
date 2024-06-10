module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "최강 패밀리의 AI 여정",
      })()
    };