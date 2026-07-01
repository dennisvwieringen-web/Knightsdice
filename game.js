const dice = [
  { id: "d4", sides: 4, name: "D4", unlock: "quest_d4" },
  { id: "d6", sides: 6, name: "D6", unlock: null },
  { id: "d8", sides: 8, name: "D8", unlock: "quest_d8" },
  { id: "d10", sides: 10, name: "D10", unlock: "quest_d10" },
  { id: "d12", sides: 12, name: "D12", unlock: "quest_d12" },
  { id: "d20", sides: 20, name: "D20", unlock: "quest_d20", altUnlock: "boss_5" }
];

const skins = [
  skin("oak", "Eiken", 0, null, "Geen kracht, gewoon eerlijk ridderhout.", ["#f4ead2", "#c8b27a", "#7c6030", "#201505"]),
  skin("gold", "Goud", 0, "quest_gold", "20% kans op +2 Kronen.", ["#fff1a4", "#d79a22", "#8a5210", "#201505"], { coins: 2, chance: 0.2 }),
  skin("iron", "IJzer", 0, "quest_iron", "Rollen van 1 worden automatisch 2.", ["#d8e4e7", "#8da0a6", "#4d5a5f", "#172025"], { minOne: 2 }),
  skin("ruby", "Robijn", 0, "boss_2", "15% kans om opnieuw te rollen en de beste te houden.", ["#ffb6a6", "#c93c4e", "#701327", "#2b0710"], { reroll: 0.15 }),
  skin("cosmic", "Cosmic", 0, "boss_4", "25% kans om naar de hoogste zijde te springen.", ["#f2edff", "#a47cf0", "#181b55", "#ffffff"], { max: 0.25 }),
  skin("emerald", "Smaragd", 5, null, "Worpen van 1 of 2 krijgen +1.", ["#b8ffd0", "#34b36b", "#17623a", "#071f12"], { lowPlus: 1 }),
  skin("sapphire", "Saffier", 6, null, "25% kans op +3 Kronen.", ["#d9ecff", "#3f80d7", "#173b78", "#071429"], { coins: 3, chance: 0.25 }),
  skin("bone", "Bot", 7, null, "50% kans dat een 1 opnieuw rolt.", ["#fff6da", "#d3c29a", "#74664a", "#251d12"], { oneReroll: 0.5 }),
  skin("obsidian", "Obsidiaan", 8, null, "18% kans op +1 bij je worp.", ["#b7a7d8", "#43335f", "#100b1b", "#ffffff"], { plusChance: 0.18, plus: 1 }),
  skin("frost", "Vorst", 9, null, "Lage worpen krijgen +1.", ["#f7ffff", "#8adbe8", "#2b6f82", "#08242d"], { halfPlus: 1 }),
  skin("shadow", "Schaduw", 10, null, "Oneven worpen krijgen +1.", ["#b8b8c8", "#505066", "#13131d", "#ffffff"], { oddPlus: 1 }),
  skin("storm", "Storm", 11, null, "12% kans om opnieuw te rollen en de beste te houden.", ["#e8f4ff", "#6b91c7", "#263d6e", "#071429"], { reroll: 0.12 }),
  skin("thunder", "Donder", 12, null, "20% kans op +2 bij je worp.", ["#fff5a8", "#e0b62f", "#5a3710", "#201505"], { plusChance: 0.2, plus: 2 }),
  skin("moon", "Maansteen", 13, null, "15% kans op +1 Klompje.", ["#f2f0ff", "#9a96d8", "#37335f", "#ffffff"], { nuggets: 1, chance: 0.15 }),
  skin("dragon", "Draak", 14, null, "10% kans om de hoogste zijde te gooien.", ["#ffd2a8", "#c84c2c", "#5b1710", "#230804"], { max: 0.1 }),
  skin("sun", "Zon", 15, null, "Maximale worp geeft +5 Kronen.", ["#fff4a6", "#f1a83a", "#8f3d12", "#251005"], { maxCoins: 5 }),
  skin("wk", "WK", 18, null, "Geweldige voetbalskin met witte lijnen, rood, groen en blauw. 12% kans op +2 Kronen en +1 Klompje.", ["#ffffff", "#d62525", "#1268d6", "#ffffff"], { coins: 2, nuggets: 1, chance: 0.12 }),
  skin("forest", "Woud", 6, null, "Worpen van 4 of hoger geven +1 Kroon.", ["#d6f5b8", "#6ea34a", "#2c5124", "#10210b"], { highCoins: 1 }),
  skin("void", "Leegte", 18, null, "8% kans op maximale worp en +1 Klompje.", ["#eee8ff", "#342759", "#05030c", "#ffffff"], { max: 0.08, nuggets: 1 }),
  skin("paladin", "Paladijn", 20, null, "Je worp is nooit lager dan 3.", ["#fff8d8", "#d9dce8", "#6f7891", "#1b1f2a"], { floor: 3 }),
  skin("heroes", "Helden", 0, "boss_super_3", "Rood-gouden heldenskin met een grote kroon. Verdien hem door de Eeuwige Dobbelkoning 3 keer te verslaan.", ["#ffe8a6", "#c51f16", "#6d0d09", "#ffd84d"], { maxCoins: 8 })
];

const skinPacks = [
  { id: "squire_pack", name: "Schildknaap-Pakje", cost: 6, tier: "cheap", description: "Goedkoop pakje met vooral gewone skins.", odds: { common: 0.8, special: 0.175, awesome: 0.025 } },
  { id: "knight_pack", name: "Ridder-Pakje", cost: 12, tier: "medium", description: "Gemiddeld pakje met meer bijzondere skins.", odds: { common: 0.55, special: 0.35, awesome: 0.1 } },
  { id: "legend_pack", name: "Legende-Pakje", cost: 20, tier: "expensive", description: "Duur pakje met de beste kans op geweldig.", odds: { common: 0.3, special: 0.45, awesome: 0.25 } }
];

const rarities = {
  common: { label: "Gewoon", chance: 0.5, ids: ["emerald", "sapphire", "bone", "forest", "frost"] },
  special: { label: "Bijzonder", chance: 0.25, ids: ["obsidian", "shadow", "storm", "moon", "thunder"] },
  awesome: { label: "Geweldig", chance: 0.075, ids: ["sun", "wk", "dragon", "void", "paladin"] }
};

const fixedSkinLevels = {
  oak: "starter",
  iron: "common",
  gold: "special",
  ruby: "special",
  cosmic: "awesome",
  heroes: "legendary"
};

const skinLevels = {
  starter: { label: "Starter", className: "level-starter" },
  common: { label: "Gewoon", className: "level-common" },
  special: { label: "Bijzonder", className: "level-special" },
  awesome: { label: "Geweldig", className: "level-awesome" },
  legendary: { label: "Legendarisch", className: "level-legendary" }
};

const quests = [
  quest("quest_d4", "Schildknaapproef", "Gooi 5 keer met je startdobbelsteen.", 5, (s) => s.totalRolls, "Ontgrendelt D4", 8, 1),
  quest("quest_d8", "Drie Zessen", "Gooi in totaal drie keer een 6.", 3, (s) => s.sixes, "Ontgrendelt D8", 10, 2),
  quest("quest_gold", "Koninklijke Schatkist", "Verzamel 30 Kronen.", 30, (s) => s.coins, "Ontgrendelt Gouden Skin", 0, 2),
  quest("quest_iron", "Smederij Van De Burcht", "Gooi 4 keer een 1.", 4, (s) => s.ones, "Ontgrendelt IJzeren Skin", 8, 2),
  quest("quest_d10", "Torenwacht", "Gooi 3 keer 8 of hoger.", 3, (s) => s.highRolls, "Ontgrendelt D10", 12, 3),
  quest("quest_d12", "Ridder Van De Tafel", "Versla twee eindbazen.", 2, (s) => s.defeatedBosses.length, "Ontgrendelt D12", 16, 5),
  quest("quest_d20", "Drakenproef", "Gooi 4 keer het hoogste getal van je dobbelsteen.", 4, (s) => s.maxRolls, "Ontgrendelt D20", 20, 12),
  quest("quest_pack_opener", "Pakjesmeester", "Open 3 skinpakjes in de winkel.", 3, (s) => s.openedPacks, "6 Klompjes", 10, 6),
  quest("quest_skin_collector", "Skinverzamelaar", "Bezit 8 skins.", 8, () => countOwnedSkins(), "8 Klompjes", 12, 8),
  quest("quest_super", "Heldenproef", "Versla de superbaas.", 1, (s) => s.defeatedBosses.includes("boss_super") ? 1 : 0, "Heldenmedaille", 25, 10, 1)
];

const bonusQuestTypes = [
  { key: "rolls", title: "Tocht", text: (n) => `Gooi in totaal ${n} keer.`, check: (s) => s.totalRolls, start: 10, step: 10 },
  { key: "sixes", title: "Zesjager", text: (n) => `Gooi in totaal ${n} zessen.`, check: (s) => s.sixes, start: 4, step: 3 },
  { key: "ones", title: "Pechbreker", text: (n) => `Gooi in totaal ${n} enen.`, check: (s) => s.ones, start: 5, step: 3 },
  { key: "high", title: "Hoge Wacht", text: (n) => `Gooi ${n} keer 8 of hoger.`, check: (s) => s.highRolls, start: 5, step: 4 },
  { key: "max", title: "Perfecte Worp", text: (n) => `Gooi ${n} keer het hoogste getal van je dobbelsteen.`, check: (s) => s.maxRolls, start: 3, step: 2 },
  { key: "coins", title: "Schatzoeker", text: (n) => `Verzamel in totaal ${n} Kronen.`, check: (s) => s.coins, start: 50, step: 35 },
  { key: "packs", title: "Pakjesridder", text: (n) => `Open ${n} skinpakjes.`, check: (s) => s.openedPacks, start: 1, step: 1 },
  { key: "skins", title: "Kleedkamer", text: (n) => `Bezit ${n} skins.`, check: () => countOwnedSkins(), start: 3, step: 1 },
  { key: "bosses", title: "Baasbreker", text: (n) => `Versla ${n} eindbazen.`, check: (s) => s.defeatedBosses.length, start: 1, step: 1 },
  { key: "super", title: "Koningsjager", text: (n) => `Versla de Eeuwige Dobbelkoning ${n} keer.`, check: (s) => s.superBossWins, start: 1, step: 1 }
];

for (let index = 0; index < 100; index += 1) {
  const type = bonusQuestTypes[index % bonusQuestTypes.length];
  const tier = Math.floor(index / bonusQuestTypes.length) + 1;
  const target = type.start + (tier - 1) * type.step;
  const nuggets = 2 + tier + (index % 5);
  const coins = 5 + tier * 2;
  quests.push(quest(`bonus_${type.key}_${tier}`, `${type.title} ${tier}`, type.text(target), target, type.check, `${nuggets} Klompjes`, coins, nuggets));
}

const bosses = [
  { id: "boss_1", name: "Baron Botbreker", dice: [6, 6, 6], reward: "18 Kronen en 2 Klompjes", coins: 18, nuggets: 2 },
  { id: "boss_2", name: "Gravin Schaduwstaal", dice: [8, 8, 6], reward: "Robijn Skin en 3 Klompjes", coins: 12, nuggets: 3 },
  { id: "boss_3", name: "Sir Donderhelm", dice: [10, 8, 8], reward: "25 Kronen en 4 Klompjes", coins: 25, nuggets: 4 },
  { id: "boss_4", name: "De Sterrenmagier", dice: [12, 10, 8], reward: "Cosmic Skin en 5 Klompjes", coins: 16, nuggets: 5 },
  { id: "boss_5", name: "Koning Draakdobbel", dice: [20, 12, 10], reward: "D20 en 8 Klompjes", coins: 30, nuggets: 8 },
  { id: "boss_super", name: "De Eeuwige Dobbelkoning", dice: [20, 20, 20], reward: "100 Klompjes, de Heldenmedaille en na 3 zeges de Helden-skin", coins: 50, nuggets: 100, heroMedals: 1, super: true }
];

const oldAccountStorageKey = "ridderdobbel.accounts.v1";
const accountStorageKey = "knights-dice.accounts.v1";

const state = {
  activeDie: "d6",
  activeSkin: "oak",
  avatarAppearance: {
    skinTone: "light",
    hairColor: "brown",
    hairStyle: "short"
  },
  coins: 0,
  nuggets: 0,
  medals: 0,
  heroMedals: 0,
  totalRolls: 0,
  sixes: 0,
  ones: 0,
  highRolls: 0,
  maxRolls: 0,
  openedPacks: 0,
  superBossWins: 0,
  adminSkinDice: {},
  completedQuests: [],
  purchasedSkins: [],
  defeatedBosses: [],
  currentBoss: null,
  duel: [],
  localDuel: {
    active: false,
    opponent: "guest",
    rounds: [],
    sReady: false,
    kReady: false
  },
  lastDuelResult: null,
  rollTimeout: null
};

let currentAccount = null;
let isLoadingProgress = false;
let deferredInstallPrompt = null;

const els = {
  authScreen: q("#authScreen"),
  appShell: q("#appShell"),
  accountName: q("#accountName"),
  accountPassword: q("#accountPassword"),
  loginButton: q("#loginButton"),
  createAccountButton: q("#createAccountButton"),
  showAccountsButton: q("#showAccountsButton"),
  accountRecovery: q("#accountRecovery"),
  accountList: q("#accountList"),
  resetAccountName: q("#resetAccountName"),
  resetAccountPassword: q("#resetAccountPassword"),
  resetPasswordButton: q("#resetPasswordButton"),
  authMessage: q("#authMessage"),
  knightAvatar: q("#knightAvatar"),
  accountLabel: q("#accountLabel"),
  skinToneSelect: q("#skinToneSelect"),
  hairColorSelect: q("#hairColorSelect"),
  hairStyleSelect: q("#hairStyleSelect"),
  installAppButton: q("#installAppButton"),
  logoutButton: q("#logoutButton"),
  adminToggleButton: q("#adminToggleButton"),
  adminPanel: q("#adminPanel"),
  adminLogin: q("#adminLogin"),
  adminContent: q("#adminContent"),
  adminPassword: q("#adminPassword"),
  adminLoginButton: q("#adminLoginButton"),
  adminMessage: q("#adminMessage"),
  adminDiceList: q("#adminDiceList"),
  adminSkinList: q("#adminSkinList"),
  activeDieName: q("#activeDieName"),
  coinCount: q("#coinCount"),
  nuggetCount: q("#nuggetCount"),
  medalCount: q("#medalCount"),
  heroMedalCount: q("#heroMedalCount"),
  medalBoardCount: q("#medalBoardCount"),
  heroMedalBoardCount: q("#heroMedalBoardCount"),
  medalLibraryList: q("#medalLibraryList"),
  questContent: q("#questContent"),
  toggleQuestButton: q("#toggleQuestButton"),
  dieButton: q("#rollButton"),
  dieArt: q("#dieArt"),
  dieValue: q("#dieValue"),
  questRollButton: q("#questRollButton"),
  bossRollButton: q("#bossRollButton"),
  rollLog: q("#rollLog"),
  diceList: q("#diceList"),
  skinList: q("#skinList"),
  packList: q("#packList"),
  shopList: q("#shopList"),
  questList: q("#questList"),
  quickBossList: q("#quickBossList"),
  bossList: q("#bossList"),
  duelBoard: q("#duelBoard"),
  localOpponentAccount: q("#localOpponentAccount"),
  startLocalDuelButton: q("#startLocalDuelButton"),
  localMainPlayer: q("#localMainPlayer"),
  localDuelBoard: q("#localDuelBoard")
};

function q(selector) {
  return document.querySelector(selector);
}

function skin(id, name, cost, unlock, power, palette, powers = {}) {
  return { id, name, cost, unlock, power, palette, className: id, powers };
}

function quest(id, title, text, target, check, reward, coins, nuggets, heroMedals = 0) {
  return { id, title, text, target, check, reward, coins, nuggets, medals: 1, heroMedals };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function defaultProgress() {
  return {
    activeDie: "d6",
    activeSkin: "oak",
    avatarAppearance: {
      skinTone: "light",
      hairColor: "brown",
      hairStyle: "short"
    },
    coins: 0,
    nuggets: 0,
    medals: 0,
    heroMedals: 0,
    totalRolls: 0,
    sixes: 0,
    ones: 0,
    highRolls: 0,
    maxRolls: 0,
    openedPacks: 0,
    superBossWins: 0,
    adminSkinDice: {},
    completedQuests: [],
    purchasedSkins: [],
    defeatedBosses: []
  };
}

function readAccounts() {
  try {
    const current = localStorage.getItem(accountStorageKey);
    const previous = localStorage.getItem(oldAccountStorageKey);
    if (!current && previous) {
      localStorage.setItem(accountStorageKey, previous);
    }
    const saved = JSON.parse(localStorage.getItem(accountStorageKey) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function writeAccounts(accounts) {
  localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
}

function getProgressSnapshot() {
  return {
    activeDie: state.activeDie,
    activeSkin: state.activeSkin,
    avatarAppearance: state.avatarAppearance,
    coins: state.coins,
    nuggets: state.nuggets,
    medals: state.medals,
    heroMedals: state.heroMedals,
    totalRolls: state.totalRolls,
    sixes: state.sixes,
    ones: state.ones,
    highRolls: state.highRolls,
    maxRolls: state.maxRolls,
    openedPacks: state.openedPacks,
    superBossWins: state.superBossWins,
    adminSkinDice: state.adminSkinDice,
    completedQuests: state.completedQuests,
    purchasedSkins: state.purchasedSkins,
    defeatedBosses: state.defeatedBosses
  };
}

function applyProgress(progress) {
  const merged = { ...defaultProgress(), ...(progress || {}) };
  merged.avatarAppearance = { ...defaultProgress().avatarAppearance, ...(progress?.avatarAppearance || {}) };
  Object.assign(state, merged, {
    currentBoss: null,
    duel: [],
    localDuel: {
      active: false,
      opponent: "guest",
      rounds: [],
      sReady: false,
      kReady: false
    },
    lastDuelResult: null,
    rollTimeout: null
  });
}

function saveProgress() {
  if (!currentAccount || isLoadingProgress) return;
  const accounts = readAccounts();
  if (!accounts[currentAccount]) return;
  accounts[currentAccount].progress = getProgressSnapshot();
  writeAccounts(accounts);
}

function showGameForAccount(name) {
  currentAccount = name;
  els.accountLabel.textContent = `Welkom Ridder ${name}`;
  els.authScreen.classList.add("hidden");
  els.appShell.classList.remove("hidden");
  els.accountPassword.value = "";
  els.authMessage.textContent = "";
  render();
}

function renderAccountRecovery() {
  const accounts = readAccounts();
  const names = Object.keys(accounts);
  els.accountRecovery.classList.remove("hidden");
  if (!names.length) {
    els.accountList.innerHTML = `<p class="log">Geen accounts gevonden in deze browser.</p>`;
    return;
  }
  els.accountList.innerHTML = names.map((name) => `<button type="button" class="account-chip" data-account-name="${name}">${name}</button>`).join("");
  els.accountList.querySelectorAll("[data-account-name]").forEach((button) => {
    button.addEventListener("click", () => {
      els.accountName.value = button.dataset.accountName;
      els.resetAccountName.value = button.dataset.accountName;
      els.accountPassword.focus();
    });
  });
}

function resetLocalPassword() {
  const name = els.resetAccountName.value.trim();
  const password = els.resetAccountPassword.value;
  const accounts = readAccounts();
  if (!name || !password) {
    els.authMessage.textContent = "Vul een accountnaam en nieuw wachtwoord in.";
    return;
  }
  if (!accounts[name]) {
    els.authMessage.textContent = "Dit account staat niet in deze browser.";
    renderAccountRecovery();
    return;
  }
  accounts[name].password = password;
  writeAccounts(accounts);
  els.accountName.value = name;
  els.accountPassword.value = password;
  els.resetAccountPassword.value = "";
  els.authMessage.textContent = `Nieuw wachtwoord opgeslagen voor ${name}.`;
  renderAccountRecovery();
}

function showInstallHelp() {
  els.rollLog.textContent = "Op Android: open Chrome-menu en kies 'Toevoegen aan startscherm' of 'App installeren'.";
}

async function installApp() {
  if (!deferredInstallPrompt) {
    showInstallHelp();
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  els.installAppButton.textContent = "App Geinstalleerd";
}

function loginAccount() {
  const name = els.accountName.value.trim();
  const password = els.accountPassword.value;
  const accounts = readAccounts();
  if (!name || !password) {
    els.authMessage.textContent = "Vul een accountnaam en wachtwoord in.";
    return;
  }
  if (!accounts[name] || accounts[name].password !== password) {
    els.authMessage.textContent = "Accountnaam of wachtwoord klopt niet.";
    return;
  }
  isLoadingProgress = true;
  applyProgress(accounts[name].progress);
  isLoadingProgress = false;
  showGameForAccount(name);
}

function createAccount() {
  const name = els.accountName.value.trim();
  const password = els.accountPassword.value;
  const accounts = readAccounts();
  if (!name || !password) {
    els.authMessage.textContent = "Kies een accountnaam en wachtwoord.";
    return;
  }
  if (accounts[name]) {
    els.authMessage.textContent = "Dit account bestaat al. Log in of kies een andere naam.";
    return;
  }
  accounts[name] = { password, progress: defaultProgress() };
  writeAccounts(accounts);
  isLoadingProgress = true;
  applyProgress(accounts[name].progress);
  isLoadingProgress = false;
  showGameForAccount(name);
}

function logoutAccount() {
  saveProgress();
  currentAccount = null;
  clearTimeout(state.rollTimeout);
  applyProgress(defaultProgress());
  els.appShell.classList.add("hidden");
  els.authScreen.classList.remove("hidden");
  els.accountName.focus();
}

function getActiveDie() {
  return dice.find((item) => item.id === state.activeDie);
}

function getActiveSkin() {
  const skinItem = skins.find((item) => item.id === state.activeSkin);
  if (skinItem) return skinItem;
  state.activeSkin = "oak";
  return skins[0];
}

function isUnlocked(item) {
  if (item.unlock === "boss_super_3") {
    return state.superBossWins >= 3;
  }
  return !item.unlock || state.completedQuests.includes(item.unlock) || state.defeatedBosses.includes(item.unlock) || (item.altUnlock && state.defeatedBosses.includes(item.altUnlock));
}

function isSkinOwned(item) {
  return item.id === "oak" || state.purchasedSkins.includes(item.id) || (item.cost === 0 && isUnlocked(item));
}

function countOwnedSkins() {
  return skins.filter(isSkinOwned).length;
}

function countUnlockedArmors() {
  return Math.max(1, countOwnedSkins());
}

function getSkinLevelKey(skinItem) {
  if (fixedSkinLevels[skinItem.id]) return fixedSkinLevels[skinItem.id];
  if (rarities.awesome.ids.includes(skinItem.id)) return "awesome";
  if (rarities.special.ids.includes(skinItem.id)) return "special";
  return "common";
}

function getSkinLevel(skinItem) {
  return skinLevels[getSkinLevelKey(skinItem)] || skinLevels.common;
}

function skinLevelBadge(skinItem) {
  const level = getSkinLevel(skinItem);
  return `<span class="skin-level ${level.className}">${level.label}</span>`;
}

function unlockLabel(item) {
  if (item.unlock === "boss_super_3") {
    return "3x Eeuwige Dobbelkoning";
  }
  return item.unlock;
}

function applySkin(roll, sides, skin) {
  const p = skin.powers;
  if (p.minOne && roll === 1) roll = p.minOne;
  if (p.oneReroll && roll === 1 && Math.random() < p.oneReroll) roll = randomInt(1, sides);
  if (p.reroll && Math.random() < p.reroll) roll = Math.max(roll, randomInt(1, sides));
  if (p.max && Math.random() < p.max) roll = sides;
  if (p.lowPlus && roll <= 2) roll = Math.min(sides, roll + p.lowPlus);
  if (p.halfPlus && roll <= Math.ceil(sides / 2)) roll = Math.min(sides, roll + p.halfPlus);
  if (p.oddPlus && roll % 2 === 1) roll = Math.min(sides, roll + p.oddPlus);
  if (p.plusChance && Math.random() < p.plusChance) roll = Math.min(sides, roll + p.plus);
  if (p.floor) roll = Math.max(p.floor, roll);
  return roll;
}

function applyAfterRoll(roll, sides, skin) {
  const p = skin.powers;
  const messages = [];
  if (p.coins && Math.random() < (p.chance ?? 1)) {
    state.coins += p.coins;
    messages.push(`Skinbonus: +${p.coins} Kronen.`);
  }
  if (p.nuggets && Math.random() < (p.chance ?? 1)) {
    state.nuggets += p.nuggets;
    messages.push(`Skinbonus: +${p.nuggets} Klompje.`);
  }
  if (p.maxCoins && roll === sides) {
    state.coins += p.maxCoins;
    messages.push(`Skinbonus: +${p.maxCoins} Kronen.`);
  }
  if (p.highCoins && roll >= 4) {
    state.coins += p.highCoins;
    messages.push("Skinbonus: +1 Kroon.");
  }
  return messages.join(" ");
}

function getAccountProgress(name) {
  const account = readAccounts()[name];
  return account?.progress || null;
}

function getLocalOpponentLoadout() {
  if (state.localDuel.opponent === "guest") {
    return { name: "Gast", die: dice.find((item) => item.id === "d6"), skin: skins.find((item) => item.id === "oak") };
  }
  const progress = getAccountProgress(state.localDuel.opponent);
  const die = dice.find((item) => item.id === progress?.activeDie) || dice.find((item) => item.id === "d6");
  const skinItem = skins.find((item) => item.id === progress?.activeSkin) || skins.find((item) => item.id === "oak");
  return { name: state.localDuel.opponent, die, skin: skinItem };
}

function localRollFor(loadout) {
  return applySkin(randomInt(1, loadout.die.sides), loadout.die.sides, loadout.skin);
}

function startLocalDuel() {
  state.localDuel = {
    active: true,
    opponent: els.localOpponentAccount.value,
    rounds: [],
    sReady: false,
    kReady: false
  };
  renderLocalDuel();
}

function localKeyRoll(playerKey) {
  if (!state.localDuel.active) startLocalDuel();
  if (state.localDuel.rounds.length >= 3) return;
  if (playerKey === "s") state.localDuel.sReady = true;
  if (playerKey === "k") state.localDuel.kReady = true;
  if (state.localDuel.sReady && state.localDuel.kReady) {
    const opponent = getLocalOpponentLoadout();
    const main = { name: currentAccount || "Speler K", die: getActiveDie(), skin: getActiveSkin() };
    const sRoll = localRollFor(opponent);
    const kRoll = localRollFor(main);
    state.localDuel.rounds.push({ s: sRoll, k: kRoll, sSides: opponent.die.sides, kSides: main.die.sides });
    state.localDuel.sReady = false;
    state.localDuel.kReady = false;
  }
  renderLocalDuel();
}

function playerQuestRoll() {
  const die = getActiveDie();
  const skin = getActiveSkin();
  animateRoll(() => {
    let roll = randomInt(1, die.sides);
    roll = applySkin(roll, die.sides, skin);
    updateRollStats(roll, die.sides);
    state.coins += Math.ceil(roll / 2);
    const bonus = applyAfterRoll(roll, die.sides, skin);
    els.dieValue.textContent = roll;
    const questMessages = checkQuests();
    els.rollLog.textContent = [`Je gooide ${roll} met ${die.name}.`, bonus, ...questMessages].filter(Boolean).join(" ");
    render();
  });
}

function updateRollStats(roll, sides) {
  state.totalRolls += 1;
  if (roll === 6) state.sixes += 1;
  if (roll === 1) state.ones += 1;
  if (roll >= 8) state.highRolls += 1;
  if (roll === sides) state.maxRolls += 1;
}

function animateRoll(done) {
  clearTimeout(state.rollTimeout);
  els.dieButton.classList.add("rolling");
  els.dieValue.textContent = "";
  state.rollTimeout = setTimeout(() => {
    els.dieButton.classList.remove("rolling");
    els.dieButton.classList.add("landed");
    done();
    setTimeout(() => els.dieButton.classList.remove("landed"), 220);
  }, 820);
}

function checkQuests() {
  const messages = [];
  quests.forEach((questItem) => {
    if (!state.completedQuests.includes(questItem.id) && questItem.check(state) >= questItem.target) {
      state.completedQuests.push(questItem.id);
      state.coins += questItem.coins;
      state.nuggets += questItem.nuggets;
      state.medals += questItem.medals;
      state.heroMedals += questItem.heroMedals;
      messages.push(`${questItem.title} voltooid: +${questItem.medals} Riddermedaille${questItem.heroMedals ? " en +1 Heldenmedaille" : ""}.`);
    }
  });
  return messages;
}

function startBossDuel(id) {
  state.currentBoss = bosses.find((boss) => boss.id === id);
  state.duel = [];
  state.lastDuelResult = null;
  els.rollLog.textContent = `${state.currentBoss.name} stapt de arena in. Gooi drie keer.`;
  render();
}

function playerBossRoll() {
  if (!state.currentBoss) {
    const next = bosses.find((boss) => !state.defeatedBosses.includes(boss.id)) || bosses[0];
    startBossDuel(next.id);
    return;
  }
  if (state.duel.length >= 3) return;
  const die = getActiveDie();
  const skin = getActiveSkin();
  animateRoll(() => {
    const bossSides = state.currentBoss.dice[state.duel.length];
    const player = applySkin(randomInt(1, die.sides), die.sides, skin);
    const boss = randomInt(1, bossSides);
    updateRollStats(player, die.sides);
    state.duel.push({ player, boss, bossSides });
    els.dieValue.textContent = player;
    if (state.duel.length === 3) finishBossDuel();
    else els.rollLog.textContent = `Ronde ${state.duel.length}: jij ${player}, baas ${boss}.`;
    render();
  });
}

function finishBossDuel() {
  const boss = state.currentBoss;
  const playerTotal = state.duel.reduce((sum, round) => sum + round.player, 0);
  const bossTotal = state.duel.reduce((sum, round) => sum + round.boss, 0);
  const win = playerTotal > bossTotal;
  let unlockText = "";
  if (win && boss.id === "boss_super") {
    const hadHeroesSkin = state.superBossWins >= 3;
    state.superBossWins += 1;
    if (!hadHeroesSkin && state.superBossWins >= 3) {
      state.activeSkin = "heroes";
      unlockText = " Helden-skin ontgrendeld!";
    }
  }
  if (win && !state.defeatedBosses.includes(boss.id)) {
    state.defeatedBosses.push(boss.id);
    state.coins += boss.coins;
    state.nuggets += boss.nuggets;
    state.heroMedals += boss.heroMedals ?? 0;
    els.rollLog.textContent = `Gewonnen van ${boss.name}! Beloning: ${boss.reward}.${unlockText}`;
  } else {
    els.rollLog.textContent = win ? `Je won opnieuw van ${boss.name}. Superbaas-overwinningen: ${state.superBossWins}/3.${unlockText}` : `Verloren van ${boss.name}. Probeer opnieuw.`;
  }
  state.lastDuelResult = { bossName: boss.name, playerTotal, bossTotal, outcome: win ? "Overwinning" : "Verloren" };
  state.currentBoss = null;
  checkQuests();
}

function formatPackOdds(pack) {
  return `Gewoon ${Math.round(pack.odds.common * 100)}% - Bijzonder ${Math.round(pack.odds.special * 100)}% - Geweldig ${Math.round(pack.odds.awesome * 100)}%`;
}

function pickRarity(pack) {
  const odds = pack.odds;
  const roll = Math.random();
  if (roll < odds.awesome) return "awesome";
  if (roll < odds.awesome + odds.special) return "special";
  return "common";
}

function openSkinPack(packId) {
  const pack = skinPacks.find((item) => item.id === packId);
  if (state.nuggets < pack.cost) {
    els.rollLog.textContent = `Je hebt ${pack.cost} Klompjes nodig.`;
    return;
  }
  state.nuggets -= pack.cost;
  state.openedPacks += 1;
  const rarity = pickRarity(pack);
  const pool = rarities[rarity].ids.map((id) => skins.find((item) => item.id === id));
  const skinItem = pool[randomInt(0, pool.length - 1)];
  const levelLabel = getSkinLevel(skinItem).label;
  if (isSkinOwned(skinItem)) {
    state.nuggets += Math.ceil(pack.cost / 2);
    els.rollLog.textContent = `${pack.name}: ${levelLabel} - ${skinItem.name}. Die had je al, dus je krijgt Klompjes terug.`;
  } else {
    state.purchasedSkins.push(skinItem.id);
    state.activeSkin = skinItem.id;
    els.rollLog.textContent = `${pack.name}: ${levelLabel} - ${skinItem.name} ontgrendeld! Je kreeg ook het ${skinItem.name}-harnas.`;
  }
  checkQuests();
  render();
}

const avatarOptions = {
  skinTone: {
    light: "#ffd9b3",
    warm: "#eeb07d",
    tan: "#c98755",
    brown: "#8b5738",
    dark: "#5a3526"
  },
  hairColor: {
    blond: "#eac65a",
    brown: "#6a3e1f",
    black: "#17110d",
    red: "#a84221",
    silver: "#c7c7bd"
  }
};

function avatarHairPath(style) {
  if (style === "long") {
    return `<path class="avatar-hair" d="M36 37 C36 20 48 13 60 15 C77 18 82 35 76 57 C72 50 70 43 68 34 C61 42 50 45 41 43 C40 56 36 65 28 72 C27 58 29 45 36 37 Z"/>`;
  }
  if (style === "mohawk") {
    return `<path class="avatar-hair" d="M52 20 L60 6 L68 20 L66 42 H54 Z"/>`;
  }
  return `<path class="avatar-hair" d="M38 38 C41 23 50 17 61 17 C73 18 80 28 78 42 C63 34 51 34 38 38 Z"/>`;
}

function renderKnightAvatar(skinItem) {
  const [light, mid, dark, ink] = skinItem.palette;
  const appearance = state.avatarAppearance;
  const skinTone = avatarOptions.skinTone[appearance.skinTone] || avatarOptions.skinTone.light;
  const hairColor = avatarOptions.hairColor[appearance.hairColor] || avatarOptions.hairColor.brown;
  const hairPath = avatarHairPath(appearance.hairStyle);
  const armorCount = countUnlockedArmors();
  els.knightAvatar.title = `${skinItem.name}-harnas - ${armorCount} harnassen vrijgespeeld`;
  els.knightAvatar.innerHTML = `
    <svg viewBox="0 0 128 150" role="img" aria-label="Ridder met ${skinItem.name}-harnas" style="--armor-ink:${ink}; --avatar-skin:${skinTone}; --avatar-hair:${hairColor}">
      <defs>
        <linearGradient id="armorGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${light}"/>
          <stop offset="0.52" stop-color="${mid}"/>
          <stop offset="1" stop-color="${dark}"/>
        </linearGradient>
      </defs>
      <path class="avatar-backplate" d="M64 8 L109 27 V76 C109 108 88 131 64 143 C40 131 19 108 19 76 V27 Z"/>
      <path class="avatar-shadow" d="M28 134 C46 142 82 142 100 134"/>
      <path class="avatar-plume" d="M53 23 C52 10 68 6 74 18 C65 19 60 26 60 37"/>
      ${hairPath}
      <path class="avatar-helmet" d="M35 45 C37 24 49 15 62 15 C79 15 91 28 91 47 V65 H35 Z"/>
      <path class="avatar-face" d="M43 46 H86 V63 H43 Z"/>
      <path class="avatar-visor" d="M39 45 H89 M47 54 H81"/>
      <path class="avatar-neck" d="M55 65 H73 V78 H55 Z"/>
      <path class="avatar-cape" d="M34 75 C28 94 25 113 18 134 H46 C46 111 52 90 64 76 Z"/>
      <path class="avatar-cape right" d="M94 75 C100 94 103 113 110 134 H82 C82 111 76 90 64 76 Z"/>
      <path class="avatar-body" d="M38 78 L64 66 L90 78 L98 112 L82 138 H46 L30 112 Z" fill="url(#armorGradient)" style="--armor-ink:${ink}"/>
      <path class="avatar-chest" d="M51 85 H77 L83 112 L72 132 H56 L45 112 Z"/>
      <path class="avatar-belt" d="M42 110 H86"/>
      <path class="avatar-arm left" d="M38 83 L18 105 L29 115 L49 92"/>
      <path class="avatar-arm right" d="M90 83 L110 105 L99 115 L79 92"/>
      <path class="avatar-sword" d="M105 42 L112 103 M100 65 H119"/>
      <circle class="avatar-gem" cx="64" cy="98" r="6"/>
      <text x="64" y="147">${armorCount}</text>
    </svg>
  `;
}

function renderAvatarControls() {
  els.skinToneSelect.value = state.avatarAppearance.skinTone;
  els.hairColorSelect.value = state.avatarAppearance.hairColor;
  els.hairStyleSelect.value = state.avatarAppearance.hairStyle;
}

function updateAvatarAppearance(key, value) {
  state.avatarAppearance = { ...state.avatarAppearance, [key]: value };
  render();
}

function poly(points, fill, extra = "") {
  return `<polygon points="${points}" fill="${fill}" ${extra}></polygon>`;
}

function dieClipPoints(id) {
  return {
    d4: "100,28 24,164 176,164",
    d6: "44,60 78,28 170,28 170,120 136,152 44,152",
    d8: "100,22 158,72 166,126 100,172 34,126 42,72",
    d10: "100,30 152,56 176,112 132,164 68,164 24,112 48,56",
    d12: "100,14 146,30 178,68 182,126 142,176 100,192 58,176 18,126 22,68 54,30",
    d20: "100,16 168,64 168,132 100,184 32,132 32,64"
  }[id];
}

function patternFacePoints(id) {
  return {
    d4: "100,28 24,164 176,164",
    d6: "44,60 136,60 136,152 44,152",
    d8: "42,72 100,22 158,72 166,126 100,126 34,126",
    d10: "66,88 100,42 134,88 100,132",
    d12: "100,66 142,94 126,146 74,146 58,94",
    d20: "64,84 136,84 100,136"
  }[id] || dieClipPoints(id);
}

function buildDieSvg(die, skinItem, scope = "play") {
  const [light, mid, dark, ink] = skinItem.palette;
  const uid = `${scope}-${die.id}-${skinItem.id}`.replace(/[^a-z0-9_-]/gi, "");
  const clip = `clip-${uid}`;
  const faceClip = `face-${uid}`;
  const filter = `shadow-${uid}`;
  const common = `stroke="rgba(255,255,255,0.45)" stroke-width="2.5" stroke-linejoin="round"`;
  const body = dieBody(die.id, light, mid, dark, common);
  return `<svg viewBox="0 0 200 200" role="img" style="--die-ink:${ink}">
    <defs>
      <filter id="${filter}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="rgba(0,0,0,0.34)"/></filter>
      <clipPath id="${clip}"><polygon points="${dieClipPoints(die.id)}"/></clipPath>
      <clipPath id="${faceClip}"><polygon points="${patternFacePoints(die.id)}"/></clipPath>
    </defs>
    <g filter="url(#${filter})">
      ${body}
      ${skinPattern(skinItem.id, ink, faceClip, die.id)}
    </g>
  </svg>`;
}

function dieBody(id, light, mid, dark, common) {
  if (id === "d4") {
    return [poly("100,28 24,164 176,164", mid, common), `<path d="M100 28 24 164 176 164Z" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="6" stroke-linejoin="round"/>`].join("");
  }
  if (id === "d6") {
    return [poly("44,60 136,60 136,152 44,152", mid, common), poly("44,60 78,28 170,28 136,60", light, common), poly("136,60 170,28 170,120 136,152", dark, common)].join("");
  }
  if (id === "d8") {
    return [
      poly("42,72 100,22 158,72 166,126 100,126 34,126", mid, common),
      poly("42,72 34,126 100,126", light, common),
      poly("158,72 100,126 166,126", dark, common),
      poly("34,126 100,172 100,126", mid, common),
      poly("166,126 100,126 100,172", dark, common),
      poly("42,72 100,22 100,126", light, common),
      poly("100,22 158,72 100,126", mid, common),
      `<path d="M100 22 158 72 166 126 100 172 34 126 42 72Z" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="5" stroke-linejoin="round"/>`,
      `<path d="M100 22 100 126 M42 72 100 126 158 72 M34 126 H166 M34 126 100 172 166 126" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>`
    ].join("");
  }
  if (id === "d10") {
    return [
      poly("100,30 48,56 66,88", light, common),
      poly("100,30 66,88 100,132 134,88", mid, common),
      poly("100,30 134,88 152,56", dark, common),
      poly("48,56 24,112 66,88", mid, common),
      poly("152,56 134,88 176,112", dark, common),
      poly("24,112 68,164 100,132 66,88", light, common),
      poly("176,112 134,88 100,132 132,164", dark, common),
      poly("68,164 100,132 132,164", mid, common),
      `<path d="M100 30 152 56 176 112 132 164 68 164 24 112 48 56Z" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="5" stroke-linejoin="round"/>`,
      `<path d="M100 30 66 88 M100 30 134 88 M48 56 66 88 M152 56 134 88 M24 112 66 88 M176 112 134 88 M66 88 100 132 134 88 M68 164 100 132 132 164 M24 112 68 164 M176 112 132 164" fill="none" stroke="rgba(0,0,0,0.22)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`
    ].join("");
  }
  if (id === "d12") {
    return [
      poly("100,14 146,30 178,68 142,94 100,66", light, common),
      poly("100,14 100,66 58,94 22,68 54,30", mid, common),
      poly("178,68 182,126 142,176 126,146 142,94", mid, common),
      poly("142,176 100,192 58,176 74,146 126,146", dark, common),
      poly("22,68 58,94 74,146 58,176 18,126", dark, common),
      poly("100,66 142,94 126,146 74,146 58,94", mid, common),
      `<path d="M100 14 146 30 178 68 182 126 142 176 100 192 58 176 18 126 22 68 54 30Z" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="5" stroke-linejoin="round"/>`,
      `<path d="M100 66 142 94 126 146 74 146 58 94Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.44)" stroke-width="4" stroke-linejoin="round"/>`,
      `<path d="M100 14 V66 M178 68 142 94 M142 176 126 146 M58 176 74 146 M22 68 58 94" fill="none" stroke="rgba(0,0,0,0.22)" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>`
    ].join("");
  }
  return [
    poly("100,16 32,64 64,84", light, common),
    poly("100,16 64,84 136,84", mid, common),
    poly("100,16 136,84 168,64", light, common),
    poly("32,64 32,132 64,84", dark, common),
    poly("168,64 136,84 168,132", dark, common),
    poly("64,84 100,136 32,132", mid, common),
    poly("136,84 168,132 100,136", mid, common),
    poly("64,84 136,84 100,136", light, common),
    poly("32,132 100,184 100,136", dark, common),
    poly("168,132 100,136 100,184", dark, common),
    `<path d="M100 16 168 64 168 132 100 184 32 132 32 64Z" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="5" stroke-linejoin="round"/>`,
    `<path d="M100 16 64 84 M100 16 136 84 M32 64 64 84 M168 64 136 84 M64 84 H136 M64 84 32 132 M136 84 168 132 M64 84 100 136 M136 84 100 136 M32 132 100 136 M168 132 100 136 M100 136 V184" fill="none" stroke="rgba(0,0,0,0.22)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`
  ].join("");
}

function skinPattern(id, ink, clip, dieId) {
  const line = `stroke="${ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.22" fill="none"`;
  const fill = `fill="${ink}" opacity="0.2"`;
  const white = `fill="white" opacity="0.32"`;
  const patterns = {
    oak: `<path d="M48 86 C74 72 94 72 122 88 S154 100 172 82 M34 128 C70 104 104 148 164 120" ${line}/>`,
    gold: `<path d="M34 76 H166 M42 118 H160 M54 158 H146" stroke="#fff1a4" stroke-width="5" opacity="0.42"/><circle cx="150" cy="62" r="6" ${white}/>`,
    iron: `<path d="M54 64 H148 M42 104 H160 M58 144 H142" ${line}/><circle cx="58" cy="86" r="5" ${fill}/><circle cx="142" cy="126" r="5" ${fill}/>`,
    ruby: `<path d="M100 42 L132 88 L100 140 L68 88 Z" ${fill}/><path d="M100 42 V140 M68 88 H132" ${line}/>`,
    cosmic: `<circle cx="54" cy="66" r="3" ${white}/><circle cx="146" cy="80" r="3" ${white}/><circle cx="118" cy="148" r="3" ${white}/><path d="M42 142 C76 100 118 98 160 54" stroke="white" stroke-width="3" opacity="0.38" fill="none"/>`,
    emerald: `<path d="M58 152 C70 104 102 78 150 54 M84 124 C66 108 62 92 70 76 M116 88 C132 84 144 74 152 58" ${line}/>`,
    sapphire: `<path d="M36 86 C68 62 92 110 124 86 S154 72 174 96 M38 128 C76 104 104 148 158 116" ${line}/>`,
    bone: `<g opacity="0.78"><path d="M58 62 C48 52 34 64 44 76 C34 86 48 100 60 90 L142 156 C154 166 168 152 158 140 C170 130 156 116 144 126 Z" fill="#fff2d2" stroke="#6f6044" stroke-width="5" stroke-linejoin="round"/><path d="M142 62 C154 52 168 66 158 78 C170 88 154 102 142 92 L58 156 C46 166 32 152 42 140 C30 130 44 116 56 126 Z" fill="#fff2d2" stroke="#6f6044" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="108" r="10" fill="#6f6044" opacity="0.38"/></g>`,
    obsidian: `<path d="M72 48 L98 100 L82 154 M130 50 L112 112 L148 156" ${line}/>`,
    frost: `<path d="M100 44 V158 M54 80 L146 128 M146 80 L54 128 M82 62 L100 78 L118 62 M82 146 L100 130 L118 146" ${line}/>`,
    shadow: `<path d="M48 84 C82 56 98 108 132 82 C152 70 162 84 172 96 M42 134 C78 108 108 154 158 124" stroke="white" stroke-width="5" opacity="0.18" fill="none"/>`,
    storm: `<path d="M118 40 L70 108 H106 L82 164 L150 90 H114 Z" ${fill}/>`,
    thunder: `<path d="M116 40 L76 106 H108 L86 162 L152 86 H116 Z" fill="#fff4a6" opacity="0.54" stroke="${ink}" stroke-width="3"/>`,
    moon: `<path d="M130 54 C96 60 82 94 96 124 C106 146 126 154 150 144 C128 166 86 152 72 120 C56 82 86 52 130 54 Z" ${fill}/>`,
    dragon: `<g opacity="0.78"><path d="M42 138 C66 86 108 58 150 78 L162 58 L162 96 C150 88 134 92 122 108 C104 130 78 132 42 138 Z" fill="#3a0b05" stroke="#ffd2a8" stroke-width="5" stroke-linejoin="round"/><path d="M82 96 L108 46 L120 92 Z" fill="#ff9b45" stroke="#ffd2a8" stroke-width="4" stroke-linejoin="round"/><path d="M112 80 L136 58 M124 98 L154 92 M68 128 C86 112 104 114 120 104" stroke="#ffd2a8" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="143" cy="80" r="4" fill="#ffd84d"/></g>`,
    sun: `<circle cx="102" cy="100" r="28" fill="#fff4a6" opacity="0.35"/><path d="M102 46 V68 M102 132 V154 M48 100 H70 M134 100 H156 M64 62 L80 78 M124 122 L140 138 M140 62 L124 78 M80 122 L64 138" ${line}/>`,
    wk: `<g opacity="0.94"><path d="M58 58 L100 42 L86 106 L52 132 Z" fill="#d62525" opacity="0.82"/><path d="M100 42 L142 58 L148 132 L114 106 Z" fill="#159447" opacity="0.88"/><path d="M86 106 L114 106 L148 132 L52 132 Z" fill="#1268d6" opacity="0.9"/><path d="M100 42 L86 106 L52 132 M100 42 L114 106 L148 132 M86 106 H114 M52 132 H148" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M82 90 C94 78 106 78 118 90 C116 102 110 112 104 120 V132 H96 V120 C90 112 84 102 82 90 Z" fill="#f8fbff" stroke="#174a9a" stroke-width="5" stroke-linejoin="round"/><path d="M88 96 C80 98 78 108 88 114 M112 96 C120 98 122 108 112 114 M92 135 H108 M88 143 H112" fill="none" stroke="#174a9a" stroke-width="5" stroke-linecap="round"/><path d="M96 90 C94 101 99 108 104 116 M109 91 C104 101 108 108 113 113" fill="none" stroke="#174a9a" stroke-width="3" stroke-linecap="round"/></g>`,
    forest: `<path d="M100 42 C80 76 86 114 102 158 C120 114 122 76 100 42 Z" ${fill}/><path d="M100 58 V150 M78 96 C94 98 104 108 108 122 M124 86 C112 96 106 108 102 120" ${line}/>`,
    void: `<circle cx="100" cy="104" r="52" ${fill}/><circle cx="100" cy="104" r="26" fill="black" opacity="0.28"/><path d="M46 104 C72 78 128 78 154 104 C128 130 72 130 46 104 Z" ${line}/>`,
    paladin: `<path d="M100 38 L150 60 V104 C150 134 128 154 100 166 C72 154 50 134 50 104 V60 Z" ${fill}/><path d="M100 60 V136 M74 96 H126" ${line}/>`,
    heroes: `<g opacity="0.88"><path d="M34 154 L34 64 L52 76 L70 64 V154 Z" fill="#8f0f0a" stroke="#ffd84d" stroke-width="5" stroke-linejoin="round"/><path d="M130 154 V64 L148 76 L166 64 V154 Z" fill="#8f0f0a" stroke="#ffd84d" stroke-width="5" stroke-linejoin="round"/><path d="M42 128 L56 70 L84 106 L104 48 L126 106 L154 70 L166 128 Z" fill="#ffd84d" stroke="#fff4b0" stroke-width="6" stroke-linejoin="round"/><path d="M52 130 H158 V146 H52 Z" fill="#6d0d09" stroke="#ffd84d" stroke-width="5" stroke-linejoin="round"/><circle cx="56" cy="70" r="7" fill="#fff4b0"/><circle cx="104" cy="48" r="8" fill="#fff4b0"/><circle cx="154" cy="70" r="7" fill="#fff4b0"/><path d="M74 138 H136" stroke="#fff4b0" stroke-width="4" stroke-linecap="round"/></g>`
  };
  const scale = {
    d4: 0.58,
    d6: 0.64,
    d8: 0.6,
    d10: 0.58,
    d12: 0.58,
    d20: 0.56
  }[dieId] || 0.6;
  return `<g clip-path="url(#${clip})" transform="translate(100 104) scale(${scale}) translate(-100 -104)">${patterns[id] || ""}</g>`;
}

function renderDieArt(die, skinItem) {
  els.dieArt.innerHTML = buildDieSvg(die, skinItem, "play");
}

function renderDice() {
  els.diceList.innerHTML = "";
  dice.forEach((die) => {
    const unlocked = isUnlocked(die);
    const button = document.createElement("button");
    button.className = `choice ${state.activeDie === die.id ? "active" : ""} ${unlocked ? "" : "locked"}`;
    button.disabled = !unlocked;
    button.innerHTML = `<span class="choice-shape ${die.id}">${die.sides}</span><strong>${die.name}</strong><small>${unlocked ? `${die.sides} Zijden` : "Vergrendeld"}</small>`;
    button.addEventListener("click", () => { state.activeDie = die.id; render(); });
    els.diceList.appendChild(button);
  });
}

function renderSkins() {
  els.skinList.innerHTML = "";
  skins.forEach((skinItem) => {
    const owned = isSkinOwned(skinItem);
    const button = document.createElement("button");
    button.className = `choice ${state.activeSkin === skinItem.id ? "active" : ""} ${owned ? "" : "locked"}`;
    button.disabled = !owned;
    button.innerHTML = `<strong>${skinItem.name}</strong>${skinLevelBadge(skinItem)}<small>${owned ? skinItem.power : "Nog Niet In Bezit"}</small>`;
    button.addEventListener("click", () => { state.activeSkin = skinItem.id; render(); });
    els.skinList.appendChild(button);
  });
}

function renderPacks() {
  els.packList.innerHTML = "";
  skinPacks.forEach((pack) => {
    const button = document.createElement("button");
    button.className = `pack-item pack-${pack.tier}`;
    button.disabled = state.nuggets < pack.cost;
    button.innerHTML = `<div><strong>${pack.name}</strong><small>${pack.description}</small><small>${formatPackOdds(pack)}</small></div><span>${pack.cost} Klompjes</span>`;
    button.addEventListener("click", () => openSkinPack(pack.id));
    els.packList.appendChild(button);
  });
  els.shopList.innerHTML = "";
}

function renderLocalAccountOptions() {
  const currentValue = els.localOpponentAccount.value || state.localDuel.opponent || "guest";
  const names = Object.keys(readAccounts()).filter((name) => name !== currentAccount);
  els.localOpponentAccount.innerHTML = `<option value="guest">Gast - Houten D6</option>${names.map((name) => `<option value="${name}">${name}</option>`).join("")}`;
  els.localOpponentAccount.value = names.includes(currentValue) || currentValue === "guest" ? currentValue : "guest";
}

function renderLocalDuel() {
  const opponent = getLocalOpponentLoadout();
  const mainName = currentAccount || "Speler K";
  const mainLoadout = { name: mainName, die: getActiveDie(), skin: getActiveSkin() };
  els.localMainPlayer.textContent = `${mainName}: ${getActiveDie().name} ${getActiveSkin().name} - toets K`;
  const sTotal = state.localDuel.rounds.reduce((sum, round) => sum + round.s, 0);
  const kTotal = state.localDuel.rounds.reduce((sum, round) => sum + round.k, 0);
  const lastRound = state.localDuel.rounds[state.localDuel.rounds.length - 1];
  const result = state.localDuel.rounds.length === 3
    ? kTotal === sTotal ? "Gelijkspel!" : kTotal > sTotal ? `${mainName} wint!` : `${opponent.name} wint!`
    : `Wacht op toetsen: ${state.localDuel.sReady ? "S klaar" : "S"} / ${state.localDuel.kReady ? "K klaar" : "K"}`;
  const rounds = [0, 1, 2].map((index) => {
    const round = state.localDuel.rounds[index];
    return `<div class="round-box"><strong>Ronde ${index + 1}</strong>${round ? `${opponent.name}: ${round.s} <small>(D${round.sSides})</small><br>${mainName}: ${round.k} <small>(D${round.kSides})</small>` : "Nog Niet Gegooid"}</div>`;
  }).join("");
  els.localDuelBoard.innerHTML = `
    <div class="local-dice-row">
      <div class="local-dice-card ${state.localDuel.sReady ? "ready" : ""}">
        <strong>S - ${opponent.name}</strong>
        <div class="local-die-preview">
          ${buildDieSvg(opponent.die, opponent.skin, "local-s")}
          <span>${lastRound?.s ?? "?"}</span>
        </div>
        <small>${opponent.die.name} ${opponent.skin.name}</small>
        <button class="secondary local-roll-button" type="button" data-local-roll="s" ${state.localDuel.rounds.length >= 3 ? "disabled" : ""}>S Gooit</button>
      </div>
      <div class="local-dice-card ${state.localDuel.kReady ? "ready" : ""}">
        <strong>K - ${mainName}</strong>
        <div class="local-die-preview">
          ${buildDieSvg(mainLoadout.die, mainLoadout.skin, "local-k")}
          <span>${lastRound?.k ?? "?"}</span>
        </div>
        <small>${mainLoadout.die.name} ${mainLoadout.skin.name}</small>
        <button class="secondary local-roll-button" type="button" data-local-roll="k" ${state.localDuel.rounds.length >= 3 ? "disabled" : ""}>K Gooit</button>
      </div>
    </div>
    <div class="local-score">
      <div><strong>S - ${opponent.name}</strong><span>${sTotal}</span><small>${opponent.die.name} ${opponent.skin.name}</small></div>
      <div><strong>K - ${mainName}</strong><span>${kTotal}</span><small>${getActiveDie().name} ${getActiveSkin().name}</small></div>
    </div>
    <p class="boss-result">${state.localDuel.active ? result : "Klik op Start Duel. Daarna drukt speler S op S en speler K op K."}</p>
    <div class="duel-grid">${rounds}</div>
  `;
}

function renderQuests() {
  els.questList.innerHTML = "";
  quests.forEach((questItem) => {
    const progress = Math.min(questItem.check(state), questItem.target);
    const done = state.completedQuests.includes(questItem.id);
    const article = document.createElement("article");
    article.className = `quest ${done ? "done" : ""}`;
    article.innerHTML = `<h3>${questItem.title}</h3><p>${questItem.text}</p><div class="progress"><span style="width:${(progress / questItem.target) * 100}%"></span></div><div class="quest-meta"><span>${done ? "Voltooid" : `${progress}/${questItem.target}`}</span><span>${questItem.coins} Kronen + ${questItem.nuggets} Klompjes</span></div><div class="medal-reward">Medaille: ${questItem.medals} Riddermedaille${questItem.heroMedals ? " + 1 Heldenmedaille" : ""}</div><div class="reward">${questItem.reward}</div>`;
    els.questList.appendChild(article);
  });
}

function toggleQuestContent() {
  const opening = els.questContent.classList.contains("hidden");
  els.questContent.classList.toggle("hidden", !opening);
  els.toggleQuestButton.textContent = opening ? "Quests Sluiten" : "Quests Openen";
}

function medalIcon(type) {
  if (type === "hero") {
    return `
      <svg viewBox="0 0 96 112" role="img" aria-label="Heldenmedaille">
        <path class="medal-ribbon left" d="M30 10 H48 L42 42 H20 Z"/>
        <path class="medal-ribbon right" d="M48 10 H66 L76 42 H54 Z"/>
        <circle class="hero-medal-ring" cx="48" cy="66" r="34"/>
        <circle class="hero-medal-core" cx="48" cy="66" r="25"/>
        <path class="hero-medal-crown" d="M28 67 L34 48 L44 60 L49 42 L56 60 L66 48 L70 67 Z"/>
        <path class="hero-medal-shine" d="M31 43 L41 34 M62 31 L68 20 M77 53 L88 49"/>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 86 104" role="img" aria-label="Riddermedaille">
      <path class="medal-ribbon left" d="M27 8 H43 L38 38 H19 Z"/>
      <path class="medal-ribbon right" d="M43 8 H59 L67 38 H48 Z"/>
      <circle class="knight-medal-ring" cx="43" cy="62" r="29"/>
      <circle class="knight-medal-core" cx="43" cy="62" r="20"/>
      <path class="knight-medal-sword" d="M43 45 V76 M34 55 H52 M37 81 H49"/>
    </svg>
  `;
}

function renderMedalLibrary() {
  const questMedals = quests.map((questItem, index) => {
    const earned = state.completedQuests.includes(questItem.id);
    return `
      <article class="medal-card ${earned ? "earned" : "locked"}">
        <div class="medal-icon">${medalIcon("knight")}</div>
        <div>
          <h3>Riddermedaille ${index + 1}</h3>
          <p>${questItem.title}</p>
          <small>${earned ? "Behaald" : "Nog Niet Behaald"}</small>
        </div>
      </article>
    `;
  }).join("");
  const heroEarned = state.heroMedals > 0 || state.completedQuests.includes("quest_super") || state.defeatedBosses.includes("boss_super");
  const heroCard = `
    <article class="medal-card hero-medal-card ${heroEarned ? "earned" : "locked"}">
      <div class="medal-icon hero">${medalIcon("hero")}</div>
      <div>
        <h3>Heldenmedaille</h3>
        <p>Versla de Eeuwige Dobbelkoning.</p>
        <small>${heroEarned ? `${state.heroMedals} Behaald` : "Nog Niet Behaald"}</small>
      </div>
    </article>
  `;
  els.medalLibraryList.innerHTML = `${heroCard}${questMedals}`;
}

function bossPortrait(boss, compact = false) {
  const looks = {
    boss_1: { skin: "#b98b61", armor: "#6f5a45", cape: "#4e1c16", accent: "#e7d2aa", mark: "bones" },
    boss_2: { skin: "#b89ebd", armor: "#2e253f", cape: "#15101f", accent: "#d94870", mark: "shadow" },
    boss_3: { skin: "#d39a62", armor: "#48515f", cape: "#3a1c10", accent: "#ffd84d", mark: "thunder" },
    boss_4: { skin: "#c9b8ff", armor: "#33265e", cape: "#161034", accent: "#8ee6ff", mark: "stars" },
    boss_5: { skin: "#d58a45", armor: "#7b2318", cape: "#2d120d", accent: "#ffb12f", mark: "dragon" },
    boss_super: { skin: "#f2c072", armor: "#5d2517", cape: "#1d0b08", accent: "#ffd84d", mark: "crown" }
  };
  const look = looks[boss.id] || looks.boss_1;
  const darkCape = boss.super ? "#090302" : look.cape;
  const headCrown = boss.super ? `<path d="M30 39 L37 17 L50 31 L57 10 L66 31 L79 17 L86 39 Z" fill="${look.accent}" stroke="#160a05" stroke-width="3" stroke-linejoin="round"/><path d="M34 39 H82" fill="none" stroke="#fff2a8" stroke-width="4" stroke-linecap="round"/><circle cx="37" cy="17" r="4" fill="#fff2a8"/><circle cx="57" cy="10" r="5" fill="#fff2a8"/><circle cx="79" cy="17" r="4" fill="#fff2a8"/>` : "";
  const mark = {
    bones: `<path d="M34 74 L62 104 M62 74 L34 104" fill="none" stroke="${look.accent}" stroke-width="4" stroke-linecap="round"/><circle cx="34" cy="74" r="4" fill="${look.accent}"/><circle cx="62" cy="104" r="4" fill="${look.accent}"/><circle cx="62" cy="74" r="4" fill="${look.accent}"/><circle cx="34" cy="104" r="4" fill="${look.accent}"/>`,
    shadow: `<path d="M36 88 C48 74 64 74 76 88 C64 101 48 101 36 88 Z" fill="none" stroke="${look.accent}" stroke-width="4" stroke-linejoin="round"/><circle cx="56" cy="88" r="7" fill="${look.accent}"/>`,
    thunder: `<path d="M58 68 L38 100 H52 L43 126 L72 88 H58 Z" fill="${look.accent}" stroke="#160a05" stroke-width="2" stroke-linejoin="round"/>`,
    stars: `<path d="M50 66 V80 M43 73 H57 M31 98 V108 M26 103 H36 M71 94 V106 M65 100 H77" fill="none" stroke="${look.accent}" stroke-width="4" stroke-linecap="round"/>`,
    dragon: `<path d="M33 110 C42 82 68 74 78 91 L84 78 V105 C75 98 66 103 60 113 C52 126 42 122 33 110 Z" fill="${look.accent}" stroke="#160a05" stroke-width="2" stroke-linejoin="round"/>`,
    crown: `<circle cx="56" cy="98" r="10" fill="${look.accent}" stroke="#160a05" stroke-width="3"/><path d="M50 98 H62 M56 92 V104" fill="none" stroke="#fff2a8" stroke-width="3" stroke-linecap="round"/>`
  }[look.mark];
  return `
    <div class="boss-portrait ${compact ? "small" : ""}">
      <svg viewBox="0 0 112 132" role="img" aria-label="${boss.name}">
        <path d="M56 8 L96 26 V70 C96 99 79 119 56 128 C33 119 16 99 16 70 V26 Z" fill="rgba(36,18,12,0.84)" stroke="${look.accent}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M25 70 C18 88 15 107 10 126 H38 C39 103 45 84 56 70 Z" fill="${look.cape}" stroke="rgba(255,224,154,0.45)" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M87 70 C94 88 97 107 102 126 H74 C73 103 67 84 56 70 Z" fill="${darkCape}" stroke="rgba(255,224,154,0.45)" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M28 43 C30 24 42 14 56 14 C72 14 84 26 85 44 V62 H28 Z" fill="${look.armor}" stroke="rgba(255,244,208,0.72)" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M30 37 C16 26 13 14 18 8 C30 14 35 23 37 35" fill="#e8d0a0" stroke="#2b160d" stroke-width="3" stroke-linejoin="round"/>
        <path d="M82 37 C96 26 99 14 94 8 C82 14 77 23 75 35" fill="#e8d0a0" stroke="#2b160d" stroke-width="3" stroke-linejoin="round"/>
        ${headCrown}
        <path d="M36 45 H78 V63 H36 Z" fill="${look.skin}" stroke="#140b07" stroke-width="2.5"/>
        <path d="M42 54 H50 M62 54 H70" fill="none" stroke="${look.accent}" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 72 L56 60 L80 72 L88 104 L74 126 H38 L24 104 Z" fill="${look.armor}" stroke="rgba(255,244,208,0.72)" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M44 80 H68 L73 104 L64 120 H48 L39 104 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(0,0,0,0.34)" stroke-width="3" stroke-linejoin="round"/>
        ${mark}
      </svg>
    </div>
  `;
}

function createBossButton(boss, compact = false) {
  const defeated = state.defeatedBosses.includes(boss.id);
  const active = state.currentBoss?.id === boss.id;
  const button = document.createElement("button");
  button.className = `${compact ? "quick-boss" : "boss-card"} ${boss.super ? "super-boss" : ""} ${defeated ? "defeated" : ""} ${active ? "active" : ""}`;
  button.innerHTML = compact
    ? `${bossPortrait(boss, true)}<div><strong>${boss.super ? "Superbaas: " : ""}${boss.name}</strong><small>${boss.dice.map((s) => `D${s}`).join(" / ")} - ${boss.reward}</small></div>`
    : `${bossPortrait(boss)}<div class="boss-info"><h3>${boss.super ? "Superbaas: " : ""}${boss.name}</h3><p>Dobbelstenen: ${boss.dice.map((s) => `D${s}`).join(", ")}</p><div class="reward">${active ? "Duel Bezig" : defeated ? "Verslagen" : `Beloning: ${boss.reward}`}</div></div>`;
  button.addEventListener("click", () => startBossDuel(boss.id));
  return button;
}

function renderBosses() {
  els.quickBossList.innerHTML = "";
  els.bossList.innerHTML = "";
  bosses.forEach((boss) => {
    els.quickBossList.appendChild(createBossButton(boss, true));
    els.bossList.appendChild(createBossButton(boss));
  });
}

function renderDuel() {
  if (!state.currentBoss && !state.lastDuelResult) {
    els.duelBoard.innerHTML = `<p class="log">Kies een baas om een duel te starten.</p>`;
    return;
  }
  const name = state.currentBoss ? state.currentBoss.name : state.lastDuelResult.bossName;
  const playerTotal = state.duel.reduce((sum, r) => sum + r.player, 0);
  const bossTotal = state.duel.reduce((sum, r) => sum + r.boss, 0);
  const rounds = [0, 1, 2].map((i) => {
    const round = state.duel[i];
    return `<div class="round-box"><strong>Ronde ${i + 1}</strong>${round ? `Jij ${round.player}<br>Baas ${round.boss} <small>(D${round.bossSides})</small>` : "Nog Niet Gegooid"}</div>`;
  }).join("");
  els.duelBoard.innerHTML = `<h3>${name}</h3><p class="boss-result">Totaal: jij ${playerTotal} - baas ${bossTotal}</p><div class="duel-grid">${rounds}</div>`;
}

function renderAdmin() {
  els.adminDiceList.innerHTML = "";
  dice.forEach((die) => {
    const card = document.createElement("article");
    card.className = "admin-card";
    card.innerHTML = `<div class="admin-preview">${buildDieSvg(die, skins[0], `admin-die-${die.id}`)}<span>${die.sides}</span></div><h3>${die.name}</h3><p>${die.sides} Zijden</p><small>${die.unlock ? `Unlock: ${die.unlock}` : "Startdobbelsteen"}</small>`;
    els.adminDiceList.appendChild(card);
  });
  els.adminSkinList.innerHTML = "";
  skins.forEach((skinItem) => {
    const previewDieId = state.adminSkinDice[skinItem.id] || "d10";
    const previewDie = dice.find((die) => die.id === previewDieId) || dice[3];
    const card = document.createElement("article");
    card.className = "admin-card";
    card.innerHTML = `
      <div class="admin-preview" data-skin-preview="${skinItem.id}">
        ${buildDieSvg(previewDie, skinItem, `admin-skin-${skinItem.id}-${previewDie.id}`)}
        <span>${previewDie.sides}</span>
      </div>
      <div class="admin-die-switch" aria-label="Bekijk ${skinItem.name} op een dobbelsteen">
        ${dice.map((die) => `<button class="${die.id === previewDie.id ? "active" : ""}" type="button" data-admin-skin="${skinItem.id}" data-admin-die="${die.id}">${die.name}</button>`).join("")}
      </div>
      <h3>${skinItem.name}</h3>
      ${skinLevelBadge(skinItem)}
      <p>${skinItem.power}</p>
      <small>${skinItem.cost ? "Uit Skinpakjes" : skinItem.unlock ? `Unlock: ${unlockLabel(skinItem)}` : "Startskin"}</small>
    `;
    card.querySelectorAll("[data-admin-die]").forEach((button) => {
      button.addEventListener("click", () => {
        state.adminSkinDice[skinItem.id] = button.dataset.adminDie;
        renderAdmin();
      });
    });
    els.adminSkinList.appendChild(card);
  });
}

function render() {
  const die = getActiveDie();
  const skinItem = getActiveSkin();
  els.activeDieName.textContent = `${die.name} ${skinItem.name}`;
  els.coinCount.textContent = state.coins;
  els.nuggetCount.textContent = state.nuggets;
  els.medalCount.textContent = state.medals;
  els.heroMedalCount.textContent = state.heroMedals;
  els.medalBoardCount.textContent = state.medals;
  els.heroMedalBoardCount.textContent = state.heroMedals;
  els.dieButton.className = `die-button shape-${die.id} ${skinItem.className}`;
  renderKnightAvatar(skinItem);
  renderAvatarControls();
  renderDieArt(die, skinItem);
  els.bossRollButton.textContent = state.currentBoss ? `Arena-Worp ${state.duel.length + 1}/3` : "Start Arena";
  renderDice();
  renderSkins();
  renderPacks();
  renderLocalAccountOptions();
  renderLocalDuel();
  renderQuests();
  renderMedalLibrary();
  renderBosses();
  renderDuel();
  if (!els.adminContent.classList.contains("hidden")) renderAdmin();
  saveProgress();
}

els.loginButton.addEventListener("click", loginAccount);
els.createAccountButton.addEventListener("click", createAccount);
els.showAccountsButton.addEventListener("click", renderAccountRecovery);
els.resetPasswordButton.addEventListener("click", resetLocalPassword);
els.logoutButton.addEventListener("click", logoutAccount);
els.accountPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") loginAccount();
});
els.accountName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.accountPassword.focus();
});
els.questRollButton.addEventListener("click", playerQuestRoll);
els.dieButton.addEventListener("click", playerQuestRoll);
els.bossRollButton.addEventListener("click", playerBossRoll);
els.startLocalDuelButton.addEventListener("click", startLocalDuel);
els.toggleQuestButton.addEventListener("click", toggleQuestContent);
els.localDuelBoard.addEventListener("click", (event) => {
  const button = event.target.closest("[data-local-roll]");
  if (!button) return;
  localKeyRoll(button.dataset.localRoll);
});
els.installAppButton.addEventListener("click", installApp);
els.skinToneSelect.addEventListener("change", () => updateAvatarAppearance("skinTone", els.skinToneSelect.value));
els.hairColorSelect.addEventListener("change", () => updateAvatarAppearance("hairColor", els.hairColorSelect.value));
els.hairStyleSelect.addEventListener("change", () => updateAvatarAppearance("hairStyle", els.hairStyleSelect.value));
window.addEventListener("keydown", (event) => {
  const tag = event.target?.tagName?.toLowerCase();
  if (tag === "input" || tag === "select" || tag === "textarea") return;
  const key = event.key.toLowerCase();
  if (key === "s" || key === "k") {
    event.preventDefault();
    localKeyRoll(key);
  }
});
els.adminToggleButton.addEventListener("click", () => {
  els.adminPanel.classList.toggle("hidden");
  if (!els.adminPanel.classList.contains("hidden")) els.adminPassword.focus();
});
els.adminLoginButton.addEventListener("click", () => {
  if (els.adminPassword.value !== "RidderDobbel") {
    els.adminMessage.textContent = "Verkeerd Wachtwoord.";
    return;
  }
  els.adminLogin.classList.add("hidden");
  els.adminContent.classList.remove("hidden");
  els.adminMessage.textContent = "";
  renderAdmin();
});
els.adminPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.adminLoginButton.click();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  els.installAppButton.textContent = "Installeer App";
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  els.installAppButton.textContent = "App Geinstalleerd";
});

els.accountName.focus();
