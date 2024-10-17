const TRANSLATIONS = {
  common: {
    "workspaces-name": "工作區名稱",
    error: "錯誤",
    success: "成功",
    user: "用戶",
    selection: "模型選擇",
    save: "保存更改",
    saving: "保存中...",
    previous: "上一頁",
    next: "下一頁",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "設置",
    system: "系統",
    invites: "邀請",
    users: "用戶",
    workspaces: "工作區",
    "workspace-chats": "對話歷史記錄", //  "workspace-chats" should be  "對話歷史記錄", means "chat history",or "chat history records"
    customization: "外觀",
    "api-keys": "API 密鑰",
    llm: "LLM 首選項",
    transcription: "Transcription 模型",
    embedder: "Embedder 首選項",
    "text-splitting": "文本分割",
    "voice-speech": "語音和講話",
    "vector-database": "向量數據庫",
    embeds: "嵌入式對話",
    "embed-chats": "嵌入式對話歷史",
    security: "用戶與安全",
    "event-logs": "事件日誌",
    privacy: "隱私與數據",
    "ai-providers": "人工智能提供商",
    "agent-skills": "代理技能",
    admin: "管理員",
    tools: "工具",
    "experimental-features": "實驗功能",
    contact: "聯繫支持",
    "browser-extension": "瀏覽器擴充",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "歡迎！",
      "placeholder-username": "請輸入用戶名",
      "placeholder-password": "請輸入密碼",
      login: "登錄",
      validating: "登錄中",
      "forgot-pass": "忘記密碼",
      reset: "重置",
    },
    "sign-in": {
      start: "登錄你的",
      end: "賬戶",
    },
    "password-reset": {
      title: "重置密碼",
      description: "請提供以下必要信息以重置您的密碼。",
      "recovery-codes": "恢復代碼",
      "recovery-code": "恢復代碼 {{index}}",
      "back-to-login": "返回登錄",
    },
  },

  welcomeMessage: {
    part1:
      "歡迎使用 AnythingLLM，這是由 Mintplex Labs 開發的開源 AI 工具，可以將任何東西轉換為您可以查詢和聊天的訓練有素的聊天機器人。AnythingLLM 是一款 BYOK（自帶密鑰）軟件，因此除了您想使用的服務外，此軟件不收取訂閱費、費用或其他費用。",
    part2:
      "AnythingLLM 是將強大的 AI 產品（如 OpenAi、GPT-4、LangChain、PineconeDB、ChromaDB 等）整合在一個整潔的包中而無需繁瑣操作的最簡單方法，可以將您的生產力提高 100 倍。",
    part3:
      "AnythingLLM 可以完全在您的本地計算機上運行，幾乎沒有開銷，您甚至不會注意到它的存在！無需 GPU。也可以進行雲端和本地安裝。\nAI 工具生態系統每天都在變得更強大。AnythingLLM 使其易於使用。",
    githubIssue: "在 Github 上創建問題",
    user1: "我該如何開始?!",
    part4:
      "很簡單。所有集合都組織成我們稱之為“工作區”的桶。工作區是文件、文檔、圖像、PDF 和其他文件的存儲桶，這些文件將被轉換為 LLM 可以理解和在對話中使用的內容。\n\n您可以隨時添加和刪除文件。",
    createWorkspace: "創建您的第一個工作區",
    user2: "這像是一個 AI Dropbox 嗎？那麼聊天呢？它是一個聊天機器人，不是嗎？",
    part5:
      "AnythingLLM 不僅僅是一個更智能的 Dropbox。\n\nAnythingLLM 提供了兩種與您的數據交流的方式：\n\n<i>查詢：</i> 您的聊天將返回在您的工作區中訪問的文檔中找到的數據或推論。向工作區添加更多文檔會使其更智能！\n\n<i>對話：</i> 您的文檔和正在進行的聊天記錄同時為 LLM 知識做出貢獻。非常適合添加基於文本的實時信息或糾正 LLM 可能存在的誤解。\n\n您可以在聊天過程中 <i>切換模式！</i>",
    user3: "哇，這聽起來很棒，讓我馬上試試！",
    part6: "玩得開心！",
    starOnGithub: "在 GitHub 上加星",
    contact: "聯繫 Mintplex Labs",
  },

  "new-workspace": {
    title: "新工作區",
    placeholder: "我的工作區",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "通用設置",
    chat: "聊天設置",
    vector: "向量數據庫",
    members: "成員",
    agent: "代理配置",
  },

  // General Appearance
  general: {
    vector: {
      title: "向量數量",
      description: "向量數據庫中的總向量數。",
    },
    names: {
      description: "這只會更改工作區的顯示名稱。",
    },
    message: {
      title: "建議的聊天消息",
      description: "自定義將向您的工作區用戶建議的消息。",
      add: "添加新消息",
      save: "保存消息",
      heading: "向我解釋",
      body: "AnythingLLM的好處",
    },
    pfp: {
      title: "助理頭像",
      description: "為此工作區自定義助手的個人資料圖像。",
      image: "工作區圖像",
      remove: "移除工作區圖像",
    },
    delete: {
      title: "刪除工作區",
      description: "刪除此工作區及其所有數據。這將刪除所有用戶的工作區。",
      delete: "刪除工作區",
      deleting: "正在刪除工作區...",
      "confirm-start": "您即將刪除整個",
      "confirm-end":
        "工作區。這將刪除向量數據庫中的所有向量嵌入。\n\n原始源文件將保持不變。此操作是不可逆轉的。",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "工作區LLM提供者",
      description:
        "將用於此工作區的特定 LLM 提供商和模型。默認情況下，它使用系統 LLM 提供程序和設置。",
      search: "搜索所有 LLM 提供商",
    },
    model: {
      title: "工作區聊天模型",
      description:
        "將用於此工作區的特定聊天模型。如果為空，將使用系統LLM首選項。",
      wait: "-- 等待模型 --",
    },
    mode: {
      title: "聊天模式",
      chat: {
        title: "聊天",
        "desc-start": "將提供 LLM 的一般知識",
        and: "和",
        "desc-end": "找到的文檔上下文的答案。",
      },
      query: {
        title: "查詢",
        "desc-start": "將",
        only: "僅",
        "desc-end": "提供找到的文檔上下文的答案。",
      },
    },
    history: {
      title: "聊天歷史記錄",
      "desc-start": "將包含在響應的短期記憶中的先前聊天的數量。",
      recommend: "推薦 20。",
      "desc-end":
        "任何超過 45 的值都可能導致連續聊天失敗，具體取決於消息大小。",
    },
    prompt: {
      title: "聊天提示",
      description:
        "將在此工作區上使用的提示。定義 AI 生成響應的上下文和指令。您應該提供精心設計的提示，以便人工智能可以生成相關且準確的響應。",
    },
    refusal: {
      title: "查詢模式拒絕響應",
      "desc-start": "當處於",
      query: "查詢",
      "desc-end": "模式時，當未找到上下文時，您可能希望返回自定義拒絕響應。",
    },
    temperature: {
      title: "LLM 溫度",
      "desc-start": "此設置控制您的 LLM 回答的“創意”程度",
      "desc-end":
        "數字越高越有創意。對於某些模型，如果設置得太高，可能會導致響應不一致。",
      hint: "大多數法學碩士都有各種可接受的有效值範圍。請諮詢您的法學碩士提供商以獲取該信息。",
    },
  },

  // Vector Database Settings
  "vector-workspace": {
    identifier: "向量數據庫標識符",
    snippets: {
      title: "最大上下文片段",
      description:
        "此設置控制每次聊天或查詢將發送到 LLM 的上下文片段的最大數量。",
      recommend: "推薦: 4",
    },
    doc: {
      title: "文檔相似性閾值",
      description:
        "源被視為與聊天相關所需的最低相似度分數。數字越高，來源與聊天就越相似。",
      zero: "無限制",
      low: "低（相似度分數 ≥ .25）",
      medium: "中（相似度分數 ≥ .50）",
      high: "高（相似度分數 ≥ .75）",
    },
    reset: {
      reset: "重置向量數據庫",
      resetting: "清除向量...",
      confirm:
        "您將重置此工作區的矢量數據庫。這將刪除當前嵌入的所有矢量嵌入。\n\n原始源文件將保持不變。此操作是不可逆轉的。",
      success: "向量數據庫已重置。",
      error: "無法重置工作區向量數據庫！",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "不明確支持工具調用的 LLMs 的性能高度依賴於模型的功能和準確性。有些能力可能受到限制或不起作用。",
    provider: {
      title: "工作區代理 LLM 提供商",
      description: "將用於此工作區的 @agent 代理的特定 LLM 提供商和模型。",
    },
    mode: {
      chat: {
        title: "工作區代理聊天模型",
        description: "將用於此工作區的 @agent 代理的特定聊天模型。",
      },
      title: "工作區代理模型",
      description: "將用於此工作區的 @agent 代理的特定 LLM 模型。",
      wait: "-- 等待模型 --",
    },
    skill: {
      title: "默認代理技能",
      description:
        "使用這些預構建的技能提高默認代理的自然能力。此設置適用於所有工作區。",
      rag: {
        title: "RAG和長期記憶",
        description:
          '允許代理利用您的本地文檔來回答查詢，或要求代理"記住"長期記憶檢索的內容片段。',
      },
      view: {
        title: "查看和總結文檔",
        description: "允許代理列出和總結當前嵌入的工作區文件的內容。",
      },
      scrape: {
        title: "抓取網站",
        description: "允許代理訪問和抓取網站的內容。",
      },
      generate: {
        title: "生成圖表",
        description: "使默認代理能夠從提供的數據或聊天中生成各種類型的圖表。",
      },
      save: {
        title: "生成並保存文件到瀏覽器",
        description:
          "使默認代理能夠生成並寫入文件，這些文件可以保存並在您的瀏覽器中下載。",
      },
      web: {
        title: "實時網絡搜索和瀏覽",
        "desc-start":
          "通過連接到網絡搜索（SERP）提供者，使您的代理能夠搜索網絡以回答您的問題。",
        "desc-end": "在代理會話期間，網絡搜索將不起作用，直到此設置完成。",
      },
    },
  },

  // Workspace Chat
  recorded: {
    title: "工作區聊天歷史記錄",
    description: "這些是用戶發送的所有聊天記錄和消息，按創建日期排序。",
    export: "導出",
    table: {
      id: "Id",
      by: "發送者",
      workspace: "工作區",
      prompt: "提示",
      response: "響應",
      at: "發送時間",
    },
  },

  appearance: {
    title: "外觀",
    description: "自定義平台的外觀設置。",
    logo: {
      title: "自定義圖標",
      description: "上傳您的自定義圖標，讓您的聊天機器人成為您的。",
      add: "添加自定義圖標",
      recommended: "建議尺寸：800 x 200",
      remove: "移除",
      replace: "替換",
    },
    message: {
      title: "自定義消息",
      description: "自定義向用戶顯示的自動消息。",
      new: "新建",
      system: "系統",
      user: "用戶",
      message: "消息",
      assistant: "AnythingLLM 聊天助手",
      "double-click": "雙擊以編輯...",
      save: "保存消息",
    },
    icons: {
      title: "自定義頁腳圖標",
      description: "自定義側邊欄底部顯示的頁腳圖標。",
      icon: "圖標",
      link: "鏈接",
    },
  },

  // API Keys
  api: {
    title: "API 密鑰",
    description: "API 密鑰允許持有者以編程方式訪問和管理此 AnythingLLM 實例。",
    link: "閱讀 API 文檔",
    generate: "生成新的 API 密鑰",
    table: {
      key: "API 密鑰",
      by: "創建者",
      created: "創建",
    },
  },

  // LLM Preferences
  llm: {
    title: "LLM 偏好",
    description:
      "這些是您首選的 LLM 聊天和嵌入提供商的憑據和設置。重要的是，這些密鑰是最新的和正確的，否則 AnythingLLM 將無法正常運行。",
    provider: "LLM 提供商",
  },

  transcription: {
    title: "轉錄模型偏好",
    description:
      "這些是您的首選轉錄模型提供商的憑據和設置。重要的是這些密鑰是最新且正確的，否則媒體文件和音頻將無法轉錄。",
    provider: "轉錄提供商",
    "warn-start":
      "在 RAM 或 CPU 有限的計算機上使用本地耳語模型可能會在處理媒體文件時停止 AnythingLLM。",
    "warn-recommend": "我們建議至少 2GB RAM 並上傳 <10Mb 的文件。",
    "warn-end": "內置模型將在首次使用時自動下載。",
  },

  embedding: {
    title: "嵌入首選項",
    "desc-start":
      "當使用本身不支持嵌入引擎的 LLM 時，您可能需要額外指定用於嵌入文本的憑據。",
    "desc-end":
      "嵌入是將文本轉換為矢量的過程。需要這些憑據才能將您的文件和提示轉換為 AnythingLLM 可以用來處理的格式。",
    provider: {
      title: "嵌入引擎提供商",
      description: "使用 AnythingLLM 的本機嵌入引擎時不需要設置。",
    },
  },

  text: {
    title: "文本拆分和分塊首選項",
    "desc-start":
      "有時，您可能希望更改新文檔在插入到矢量數據庫之前拆分和分塊的默認方式。",
    "desc-end": "只有在了解文本拆分的工作原理及其副作用時，才應修改此設置。",
    "warn-start": "此處的更改僅適用於",
    "warn-center": "新嵌入的文檔",
    "warn-end": "，而不是現有文檔。",
    size: {
      title: "文本塊大小",
      description: "這是單個向量中可以存在的字符的最大長度。",
      recommend: "嵌入模型的最大長度為",
    },
    overlap: {
      title: "文本塊重疊",
      description: "這是在兩個相鄰文本塊之間分塊期間發生的最大字符重疊。",
    },
  },

  // Vector Database
  vector: {
    title: "向量數據庫",
    description:
      "這些是 AnythingLLM 實例如何運行的憑據和設置。重要的是，這些密鑰是最新的和正確的。",
    provider: {
      title: "向量數據庫提供商",
      description: "LanceDB 不需要任何配置。",
    },
  },

  // Embeddable Chats
  embeddable: {
    title: "可嵌入的聊天小部件",
    description:
      "可嵌入的聊天小部件是與單個工作區綁定的面向公眾的聊天界面。這些允許您構建工作區，然後您可以將其發布到全世界。",
    create: "創建嵌入式對話",
    table: {
      workspace: "工作區",
      chats: "已發送聊天",
      Active: "活動域",
    },
  },

  // Embeddable Chat History
  "embed-chats": {
    title: "嵌入聊天",
    description: "這些是您發布的任何嵌入的所有記錄的聊天和消息。",
    table: {
      embed: "嵌入",
      sender: "發送者",
      message: "消息",
      response: "響應",
      at: "發送於",
    },
  },

  multi: {
    title: "多用戶模式",
    description: "通過激活多用戶模式來設置您的實例以支持您的團隊。",
    enable: {
      "is-enable": "多用戶模式已啟用",
      enable: "啟用多用戶模式",
      description:
        "默認情況下，您將是唯一的管理員。作為管理員，您需要為所有新用戶或管理員創建賬戶。不要丟失您的密碼，因為只有管理員用戶可以重置密碼。",
      username: "管理員賬戶用戶名",
      password: "管理員賬戶密碼",
    },
    password: {
      title: "密碼保護",
      description:
        "用密碼保護您的AnythingLLM實例。如果您忘記了密碼，那麼沒有恢復方法，所以請確保保存這個密碼。",
    },
    instance: {
      title: "實例密碼保護",
      description:
        "默認情況下，您將是唯一的管理員。作為管理員，您需要為所有新用戶或管理員創建賬戶。不要丟失您的密碼，因為只有管理員用戶可以重置密碼。",
      password: "實例密碼",
    },
  },

  // Event Logs
  event: {
    title: "事件日誌",
    description: "查看此實例上發生的所有操作和事件以進行監控。",
    clear: "清除事件日誌",
    table: {
      type: "事件類型",
      user: "用戶",
      occurred: "發生時間",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "隱私和數據處理",
    description:
      "這是您對如何處理連接的第三方提供商和AnythingLLM的數據的配置。",
    llm: "LLM選擇",
    embedding: "嵌入偏好",
    vector: "向量數據庫",
    anonymous: "啟用匿名遙測",
  },
};

export default TRANSLATIONS;
