// gitrepo: https://github.com/broderickhyman/ao-bin-dumps
// url to consume: https://www.albion-online-data.com/

// Current Prices: https://www.albion-online-data.com/api/v1/stats/prices/ITEM_ID1,ItemID2?locations=Caerleon Market,Bridgewatch Market
// Historical Prices: https://www.albion-online-data.com/api/v1/stats/charts/ITEM_ID
// Gold Prices: https://www.albion-online-data.com/api/v1/stats/gold

// Search players and guilds: gameinfo.albiononline.com/api/gameinfo/search?q=[name]
//     Example: gameinfo.albiononline.com/api/gameinfo/search?q=Laran
//
//     Player info: gameinfo.albiononline.com/api/gameinfo/players/[id]
// Example: gameinfo.albiononline.com/api/…rs/4KqV5BPOQ1-oBn-pW6OvVA
//
// Guild info: gameinfo.albiononline.com/api/gameinfo/guilds/[id]
// Example: gameinfo.albiononline.com/api/…ds/WYx2hll2QGKCsIZefyBW7A
//
// Guild members: gameinfo.albiononline.com/api/gameinfo/guilds/[id]/members
// Example: gameinfo.albiononline.com/api/…yTZQsG70sOuoGXgog/members
//
// Alliance info: gameinfo.albiononline.com/api/gameinfo/alliances/[id]
// Example: gameinfo.albiononline.com/api/…es/8PgAzaGKRVGAcGD8wY7CKw
//
// Item category tree: gameinfo.albiononline.com/api/…o/items/_itemCategoryTree
//
// Weapon categories: gameinfo.albiononline.com/api/…o/items/_weaponCategories
//
// Item info: gameinfo.albiononline.com/api/gameinfo/items/[id]/data
// Example: gameinfo.albiononline.com/api/gameinfo/items/T5_BAG/data
//
// Item icon: gameinfo.albiononline.com/api/gameinfo/items/[id]
// Example: gameinfo.albiononline.com/api/gameinfo/items/T5_BAG
//
// Spell icon: gameinfo.albiononline.com/api/gameinfo/spells/[id]
// Example: gameinfo.albiononline.com/api/…spells/PASSIVE_SLOWPOISON

export const REPO = 'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/';
export const ITEMS = REPO+'items.xml';
export const ITEM_IMG = 'https://gameinfo.albiononline.com/api/gameinfo/items/';