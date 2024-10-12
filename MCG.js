// Project MCG: https://github.com/Project-MCG

function extractFavicon(domain) {
    return `https://www.google.com/s2/favicons?sz=256&domain=${domain}`;
}

// ################################################### this section can be flexibly customized ###################################################

const BASE_ICON_SET_URL =
    "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

const LOCATION_ICON_SET_URL = "https://img.icons8.com/color/144/";

const services = [
    // Routing rules are matched in order from top to bottom, with the rule at the top of the list taking precedence over the rules below it.
    // Default services: Apple, iCloud, Google, Telegram.
    {
        name: "bilibili",
        icon: `${BASE_ICON_SET_URL}bilibili_2.png`,
        alias: "BiliBili",
    },
    { name: "Binance", icon: extractFavicon("www.binance.com") },
    { name: "OKX", icon: extractFavicon("www.okx.com") },
    { name: "OpenAI", icon: extractFavicon("openai.com") },
    { name: "Copilot", icon: `${BASE_ICON_SET_URL}Copilot.png` },
    { name: "Microsoft", icon: `${BASE_ICON_SET_URL}Microsoft.png` },
    { name: "YouTube", icon: `${BASE_ICON_SET_URL}YouTube.png` },
];

const locations = [
    {
        name: "Argentina 🇦🇷",
        icon: `${LOCATION_ICON_SET_URL}argentina.png`,
        filter: "(?i)阿根廷|Argentina|ARG|AR|argentina|arg|ar|🇦🇷",
    },
    {
        name: "Finland 🇫🇮",
        icon: `${LOCATION_ICON_SET_URL}finland.png`,
        filter: "(?i)芬兰|Finland|FIN|FI|finland|fin|fi|🇫🇮",
    },
    {
        name: "France 🇫🇷",
        icon: `${LOCATION_ICON_SET_URL}france.png`,
        filter: "(?i)法国|France|FR|france|fr|🇫🇷",
    },
    {
        name: "Germany 🇩🇪",
        icon: `${LOCATION_ICON_SET_URL}germany.png`,
        filter: "(?i)德国|Germany|GER|DE|germany|ger|de|🇩🇪",
    },
    {
        name: "Hong Kong, China 🇭🇰",
        icon: `${LOCATION_ICON_SET_URL}hongkong-circular.png`,
        filter: "(?i)香港|Hong Kong|HK|hong kong|hk|🇭🇰",
    },
    {
        name: "Iraq 🇮🇶",
        icon: `${LOCATION_ICON_SET_URL}iraq.png`,
        filter: "(?i)伊拉克|Iraq|IRQ|IQ|iraq|iq|🇮🇶",
    },
    {
        name: "Japan 🇯🇵",
        icon: `${LOCATION_ICON_SET_URL}japan.png`,
        filter: "(?i)日本|Japan|japan|ja|🇯🇵",
    },
    {
        name: "Korea 🇰🇷",
        icon: `${LOCATION_ICON_SET_URL}south-korea.png`,
        filter: "(?i)韩国|Korea|KR|korea|kr|🇰🇷",
    },
    {
        name: "Russia 🇷🇺",
        icon: `${LOCATION_ICON_SET_URL}russian-federation.png`,
        filter: "(?i)俄罗斯|Russia Federation|Russia|RU|russia federation|russia|ru|🇷🇺",
    },
    {
        name: "Singapore 🇸🇬",
        icon: `${LOCATION_ICON_SET_URL}singapore.png`,
        filter: "(?i)新加坡|Singapore|singapore|sg|🇸🇬",
    },
    {
        name: "Taiwan, China 🇨🇳",
        icon: `${LOCATION_ICON_SET_URL}china.png`,
        filter: "(?i)台湾|Taiwan|TW|taiwan|tw|\uD83C\uDDF9\uD83C\uDDFC|🇨🇳",
    },
    {
        name: "Thailand 🇹🇭",
        icon: `${LOCATION_ICON_SET_URL}thailand.png`,
        filter: "(?i)泰国|Thailand|TH|thailand|th|🇹🇭",
    },
    {
        name: "Türkiye 🇹🇷",
        icon: `${LOCATION_ICON_SET_URL}turkey.png`,
        filter: "(?i)土耳其|Türkiye|Turkey|TUR|TR|türkiye|turkey|tur|tr|🇹🇷",
    },
    {
        name: "United Kingdom 🇬🇧",
        icon: `${LOCATION_ICON_SET_URL}great-britain.png`,
        filter: "(?i)英国|United Kingdom|Great Britain|UK|GB|united kingdom|great britain|uk|gb|🇬🇧",
    },
    {
        name: "United States 🇺🇸",
        icon: `${LOCATION_ICON_SET_URL}usa.png`,
        filter: "(?i)美国|United States of America|United States|USA|US|united states of america|united states|usa|us|🇺🇸",
    },
    {
        name: "Cloudflare 🌐",
        icon: `${BASE_ICON_SET_URL}Cloudflare.png`,
        filter: "(?i)Cloudflare|CF|cloudflare|cf",
    },
];

// ####################################### DO NOT MODIFY THE CODE BELOW UNLESS YOU KNOW WHAT YOU ARE DOING #######################################

// General Configuration

const generalConfig = {
    "allow-lan": false,
    mode: "rule",
    "log-level": "info",
    ipv6: false,
    "find-process-mode": "strict",
    "external-controller": "",
    profile: {
        "store-selected": true,
        "store-fake-ip": true,
    },
    "unified-delay": true,
    "tcp-concurrent": true,
    "global-client-fingerprint": "chrome",
    "geodata-mode": false,
    "geodata-loader": "memconservative",
    "geo-auto-update": true,
    "geo-update-interval": 24,
    "geox-url": {
        geosite:
            "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@release/geosite.dat",
        mmdb: "https://cdn.jsdelivr.net/gh/\u004D\u0065\u0074\u0061\u0043\u0075\u0062\u0065\u0058/\u006D\u0065\u0074\u0061-rules-dat@release/country-lite.mmdb",
    },
    "global-ua": "\u0063\u006c\u0061\u0073\u0068.\u006D\u0065\u0074\u0061",
    "etag-support": true,
};

// DNS

const chineseNameservers = [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
];

const internationalNameservers = [
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query",
];

const dns = {
    enable: true,
    "prefer-h3": true,
    "use-hosts": true,
    "use-system-hosts": false,
    "respect-rules": false,
    listen: "0.0.0.0:1053",
    ipv6: false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": [
        "*",
        "+.lan",
        "+.local",
        "time.*.com",
        "ntp.*.com",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
    ],
    "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
    "nameserver-policy": {
        "geosite:private,cn,geolocation-cn": chineseNameservers,
        "geosite:geolocation-!cn": internationalNameservers,
    },
    nameserver: [...chineseNameservers, ...internationalNameservers],
};

// Hosts

const hosts = {};

// Domain Sniffing

const sniffer = {
    enable: false,
};

// TUN

const tun = {
    enable: true,
    stack: "mixed",
    "auto-route": true,
    "auto-redirect": true,
    "auto-detect-interface": true,
    "strict-route": true,
    "dns-hijack": ["any:53", "tcp://any:53"],
};

// Proxy Groups

const proxyGroupCommon = {
    url: "https://www.gstatic.com/generate_204",
    interval: 300,
    lazy: true,
    timeout: 5000,
    "max-failed-times": 5,
    hidden: false,
};

const locationProxyGroupCommon = {
    ...proxyGroupCommon,
    type: "url-test",
    tolerance: 50,
    proxies: ["REJECT"],
    "include-all": true,
};

const serviceProxyGroupProxies = [
    "PROXY",
    "AUTO",
    "FALLBACK",
    "LOAD BALANCING (Consistent hashing)",
    "LOAD BALANCING (Round robin)",
    "DIRECT",
    ...locations.map(({ name }) => name),
];

function createProxyGroups(items, commonConfig, type, extraProps = {}) {
    return items.map(({ name, icon, filter }) => ({
        ...commonConfig,
        name,
        type,
        icon,
        filter,
        ...extraProps,
    }));
}

const proxyGroups = [
    {
        ...proxyGroupCommon,
        name: "PROXY",
        type: "select",
        proxies: [
            "AUTO",
            "FALLBACK",
            "LOAD BALANCING (Consistent hashing)",
            "LOAD BALANCING (Round robin)",
            ...locations.map(({ name }) => name),
        ],
        icon: `${BASE_ICON_SET_URL}Proxy.png`,
    },
    {
        ...proxyGroupCommon,
        name: "AUTO",
        type: "url-test",
        tolerance: 50,
        proxies: [...locations.map(({ name }) => name)],
        icon: `${BASE_ICON_SET_URL}Auto.png`,
    },
    {
        ...proxyGroupCommon,
        name: "FALLBACK",
        type: "fallback",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${BASE_ICON_SET_URL}Available.png`,
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Consistent hashing)",
        type: "load-balance",
        strategy: "consistent-hashing",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${BASE_ICON_SET_URL}Round_Robin_1.png`,
    },
    {
        ...proxyGroupCommon,
        name: "LOAD BALANCING (Round robin)",
        type: "load-balance",
        strategy: "round-robin",
        proxies: [...locations.map(({ name }) => name)],
        icon: `${BASE_ICON_SET_URL}Round_Robin.png`,
    },
    ...createProxyGroups(services, proxyGroupCommon, "select", {
        proxies: serviceProxyGroupProxies,
    }),
    {
        ...proxyGroupCommon,
        name: "Apple",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}Apple_1.png`,
    },
    {
        ...proxyGroupCommon,
        name: "iCloud",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}iCloud.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Google",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}Google_Search.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Telegram",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}Telegram_X.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Others",
        type: "select",
        proxies: [...serviceProxyGroupProxies],
        icon: `${BASE_ICON_SET_URL}Final.png`,
    },
    {
        ...proxyGroupCommon,
        name: "Advertising",
        type: "select",
        proxies: ["REJECT", "DIRECT"],
        icon: `${BASE_ICON_SET_URL}Advertising.png`,
    },
    ...createProxyGroups(locations, locationProxyGroupCommon, "url-test"),
];

// Routing Rules

function createServiceRules(services) {
    return services.map(({ name }) => `RULE-SET,${name.toLowerCase()},${name}`);
}

const rules = [
    ...createServiceRules(services),
    "RULE-SET,applications,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,Advertising",
    "GEOSITE,win-spy,Advertising",
    "GEOSITE,win-extra,Advertising",
    "RULE-SET,icloud,iCloud",
    "RULE-SET,apple@cn,Apple",
    "RULE-SET,apple,Apple",
    "RULE-SET,google@cn,Google",
    "RULE-SET,google,Google",
    "RULE-SET,proxy,PROXY",
    "RULE-SET,\u0067\u0066\u0077,PROXY",
    "RULE-SET,tld-not-cn,PROXY",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "RULE-SET,telegramcidr,Telegram,no-resolve",
    "GEOIP,LAN,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,Others",
];

// Rule Providers

const ruleProviderCommon = {
    type: "http",
    interval: 86400,
    proxy: "DIRECT",
    format: "yaml",
};

function createServiceRuleProviders(services, commonConfig) {
    return services.reduce((acc, { name, alias }) => {
        const ruleName = alias || name;
        acc[name.toLowerCase()] = {
            ...commonConfig,
            behavior: "classical",
            url: `https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/\u0043\u006c\u0061\u0073\u0068/${ruleName}/${ruleName}.yaml`,
            path: `./ruleset/blackmatrix7/${name.toLowerCase()}.yaml`,
        };
        return acc;
    }, {});
}

const ruleProviders = {
    direct: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/direct.txt",
        path: "./ruleset/loyalsoldier/direct.yaml",
    },
    proxy: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/proxy.txt",
        path: "./ruleset/loyalsoldier/proxy.yaml",
    },
    reject: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/reject.txt",
        path: "./ruleset/loyalsoldier/reject.yaml",
    },
    private: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/private.txt",
        path: "./ruleset/loyalsoldier/private.yaml",
    },
    "apple@cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/apple.txt",
        path: "./ruleset/loyalsoldier/apple@cn.yaml",
    },
    icloud: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/icloud.txt",
        path: "./ruleset/loyalsoldier/icloud.yaml",
    },
    "google@cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/google.txt",
        path: "./ruleset/loyalsoldier/google@cn.yaml",
    },
    "\u0067\u0066\u0077": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/\u0067\u0066\u0077.txt",
        path: "./ruleset/loyalsoldier/\u0067\u0066\u0077.yaml",
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/tld-not-cn.txt",
        path: "./ruleset/loyalsoldier/tld-not-cn.yaml",
    },
    telegramcidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/telegramcidr.txt",
        path: "./ruleset/loyalsoldier/telegramcidr.yaml",
    },
    lancidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/lancidr.txt",
        path: "./ruleset/loyalsoldier/lancidr.yaml",
    },
    cncidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/cncidr.txt",
        path: "./ruleset/loyalsoldier/cncidr.yaml",
    },
    applications: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/\u0063\u006c\u0061\u0073\u0068-rules@release/applications.txt",
        path: "./ruleset/loyalsoldier/applications.yaml",
    },
    apple: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/\u0043\u006c\u0061\u0073\u0068/Apple/Apple.yaml",
        path: "./ruleset/blackmatrix7/apple.yaml",
    },
    google: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/\u0043\u006c\u0061\u0073\u0068/Google/Google.yaml",
        path: "./ruleset/blackmatrix7/google.yaml",
    },
    ...createServiceRuleProviders(services, ruleProviderCommon),
};

// generate configuration using the above settings

function validateOriginalConfig(config) {
    const proxyCount = Array.isArray(config?.proxies)
        ? config?.proxies?.length
        : 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object" &&
        config?.["proxy-providers"] !== null
            ? Object.keys(config?.["proxy-providers"])?.length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0)
        throw new Error(
            "The original configuration must contain a non-empty proxies array (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/) or a proxy-providers object with at least one property (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)"
        );
    if (proxyCount > 0) {
        const { proxies } = config;
        i = 0;
        proxies.forEach((proxy) => {
            i++;
            if (!proxy.name || !proxy.type || !proxy.server || !proxy.port) {
                throw new Error(
                    `Invalid proxy number ${i} configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/)`
                );
            }
        });
        console.log(
            `The original configuration contains ${proxyCount} proxies, which will be preserved`
        );
    }
    if (proxyProviderCount > 0) {
        const { "proxy-providers": proxyProviders } = config;
        i = 0;
        Object.values(proxyProviders).forEach((provider) => {
            i++;
            if (
                !provider.name ||
                !provider.type ||
                (provider.type === "http" && !provider.url)
            ) {
                throw new Error(
                    `Invalid proxy provider number ${i} configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)`
                );
            }
        });
        console.log(
            `The original configuration contains ${proxyProviderCount} proxy providers, which will be preserved`
        );
    }
}

function main(config) {
    try {
        validateOriginalConfig(config);
        Object.assign(config, generalConfig, {
            dns,
            hosts,
            sniffer,
            tun,
            "proxy-groups": proxyGroups,
            rules,
            "rule-providers": ruleProviders,
        });
        console.log("The generated configuration is as follows");
        console.log(config);
        return config;
    } catch (error) {
        console.error(
            `An error occurred during configuration generation: ${error.message}`
        );
        return { error: error.message, originalConfig: config };
    }
}
