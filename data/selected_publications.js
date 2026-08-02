window.publicationsData = {
  viewAllHref: "./papers/",
  items: [
    {
      tags: ["Preprint"],
      title: "FlowSteer: Prompt-Only Workflow Steering Exposes Planning-Time Vulnerabilities in Multi-Agent LLM Systems",
      authors: "<u><strong>Fanxiao Li</strong></u>, Jiaying Wu<sup>†</sup>, Tingchao Fu, Natasha Jaques, Wei Zhou<sup>†</sup>, Min-Yen Kan",
      venue: "arXiv 2605.11514, 2026.",
      tldr: "<strong>TL;DR:</strong> We introduce FlowSteer, demonstrating that prompt-only steering can manipulate workflow planning and information propagation in multi-agent LLM systems, and propose FlowGuard, an input-side defense that substantially reduces attack success while preserving task utility.",
      pdf: "https://arxiv.org/abs/2605.11514",
      code: "https://github.com/fanxiao15/FlowSteer",
      bib: "@article{li2026flowsteer,\n  title={FlowSteer: Prompt-Only Workflow Steering Exposes Planning-Time Vulnerabilities in Multi-Agent LLM Systems},\n  author={Li, Fanxiao and Wu, Jiaying and Fu, Tingchao and Jaques, Natasha and Zhou, Wei and Kan, Min-Yen},\n  journal={arXiv preprint arXiv:2605.11514},\n  year={2026}\n}",
      image: "./assets/publications/FlowSteer.png"
    },
    {
      tags: ["ACL'26"],
      title: "What's Left Unsaid? Detecting and Correcting Misleading Omissions in Multimodal News Previews",
      authors: "<u><strong>Fanxiao Li</strong></u>, Jiaying Wu, Tingchao Fu, Dayang Li, Herun Wan, Wei Zhou<sup>†</sup>, Min-Yen Kan",
      venue: "The 64rd Annual Meeting of the Association for Computational Linguistics",
      tldr: "TL;DR: We introduce MM-MISLEADING, a benchmark for detecting omission-induced multimodal misleadingness in news previews, and propose OMGuard to effectively identify, explain, and correct misleading omissions.",
      pdf: "https://aclanthology.org/2026.acl-long.293/",
      code: "https://github.com/fanxiao15/OMGuard",
      bib: "@inproceedings{li-etal-2026-whats-left,\n    title = \"What{'}s Left Unsaid? Detecting and Correcting Misleading Omissions in Multimodal News Previews\",\n    author = \"Li, Fanxiao  and\n      Wu, Jiaying  and\n      Fu, Tingchao  and\n      Li, Dayang  and\n      Wan, Herun  and\n      Zhou, Wei  and\n      Kan, Min-Yen\",\n    booktitle = \"Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)\",\n    year = \"2026\",\n    publisher = \"Association for Computational Linguistics\",\n    doi = \"10.18653/v1/2026.acl-long.293\",\n    pages = \"6480--6502\",\n    ISBN = \"979-8-89176-390-6\"\n}",
      image: "./assets/publications/2026_ACL_OMGuard.png"
    },
    {
      tags: ["ACL'26"],
      highlight: "Oral",
      title: "Beyond the Crowd: LLM-Augmented Community Notes for Governing Health Misinformation",
      authors: "Jiaying Wu<sup>*</sup>, Zihang Fu<sup>*</sup>, Haonan Wang, <u><strong>Fanxiao Li</strong></u>, Jiafeng Guo, Preslav Nakov, Min-Yen Kan",
      venue: "The 64rd Annual Meeting of the Association for Computational Linguistics",
      tldr: "TL;DR: We introduce CROWDNOTES+, an LLM-augmented framework that accelerates evidence-grounded Community Note creation and evaluation, improving the timeliness, correctness, and helpfulness of health misinformation governance.",
      pdf: "https://aclanthology.org/2026.acl-long.233/",
      code: "https://github.com/jiayingwu19/CrowdNotesPlus",
      bib: "@inproceedings{wu-etal-2026-beyond-crowd,\n    title = \"Beyond the Crowd: {LLM}-Augmented Community Notes for Governing Health Misinformation\",\n    author = \"Wu, Jiaying  and\n      Fu, Zihang  and\n      Wang, Haonan  and\n      Li, Fanxiao  and\n      Guo, Jiafeng  and\n      Nakov, Preslav  and\n      Kan, Min-Yen\",\n    booktitle = \"Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)\",\n    year = \"2026\",\n    publisher = \"Association for Computational Linguistics\",\n    doi = \"10.18653/v1/2026.acl-long.233\",\n    pages = \"5152--5171\",\n    ISBN = \"979-8-89176-390-6\"\n}",
      image: "./assets/publications/2026_ACL_CrowdNotes.png"
    },
    {
      tags: ["ICLR'26"],
      highlight: "",
      title: "Seeing Through Deception: Uncovering Misleading Creator Intent in Multimodal News with Vision-Language Models",
      authors: "Jiaying Wu, <u><strong>Fanxiao Li</strong></u>, Zihang Fu, Min-Yen Kan, Bryan Hooi",
      venue: "The Fourteenth International Conference on Learning Representations",
      tldr: "TL;DR: We introduce DeceptionDecoded, an intent-guided benchmark for detecting, attributing, and interpreting misleading creator intent in multimodal news, while improving robust and intent-aware misinformation detection in real-world settings.",
      pdf: "https://openreview.net/pdf?id=02NbD16OnA",
      code: "https://github.com/jiayingwu19/DeceptionDecoded",
      bib: "@inproceedings{wu2025seeing,\n  title={Seeing Through Deception: Uncovering Misleading Creator Intent in Multimodal News with Vision-Language Models},\n  author={Wu, Jiaying and Li, Fanxiao and Fu, Zihang and Kan, Min-Yen and Hooi, Bryan},\n  booktitle={The Fourteenth International Conference on Learning Representations},\n  year={2026}\n}",
      image: "./assets/publications/2026_ICLR_DeceptionDecoder.png"
    },
    {
      tags: ["AAAI'26"],
      title: "Drifting Away from Truth: GenAI-Driven News Diversity Challenges LVLM-Based Misinformation Detection",
      authors: "<u><strong>Fanxiao Li</strong></u>, Jiaying Wu<sup>†</sup>, Tingchao Fu, Yunyun Dong, Bingbing Song, Wei Zhou<sup>†</sup>",
      venue: "The 40th Annual AAAI Conference on Artificial Intelligence",
      tldr: "TL;DR: We introduce DRIFTBENCH to systematically reveal how GenAI-driven news diversity, multi-level drift, and evidence contamination undermine the robustness and reasoning reliability of LVLM-based multimodal misinformation detection.",
      pdf: "https://ojs.aaai.org/index.php/AAAI/article/view/37023",
      code: "https://github.com/fanxiao15/DriftBench",
      bib: "@inproceedings{li2026drifting,\n  title={Drifting away from truth: Genai-driven news diversity challenges lvlm-based misinformation detection},\n  author={Li, Fanxiao and Wu, Jiaying and Fu, Tingchao and Dong, Yunyun and Song, Bingbing and Zhou, Wei},\n  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},\n  volume={40},\n  number={1},\n  pages={588--596},\n  year={2026}\n}",
      image: "./assets/publications/2026_AAAI_DriftBench.png"
    }
  ]
};
