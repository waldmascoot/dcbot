module.exports = {
	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------

	name: "Store Server Info",

	//---------------------------------------------------------------------
	// Action Section
	//
	// This is the section the action will fall into.
	//---------------------------------------------------------------------

	section: "Serwer info",

	//---------------------------------------------------------------------
	// Action Subtitle
	//
	// This function generates the subtitle displayed next to the name.
	//---------------------------------------------------------------------

	subtitle: function(data) {
		const servers = ["Current Server", "Temp Variable", "Server Variable", "Global Variable"];
		const info = ["Server Object", "Server ID", "Server Name", "Server Name Acronym", "Server Region", "Server Icon URL", "Server Verification Level", "Server Default Channel", "Server AFK Channel", "Server System Channel", "Server Default Role", "Server Owner Object", "Server Bot Member", "Server Channels List", "Server Roles List", "Server Members List", "Server Emojis List", "Server Member Count", "Server Created At", "Server AFK Timeout", "Server Available", "Server Large", "Server Joined At", "Server Channels Count", "Server Emojis Count", "Server Embed Enabled", "Server Do Not Disturb Members Count", "Server Online Members Count", "Server Offline Members Count", "Server Idle Members Count", "Server Bot Count", "Server Channels IDs List", "Server Roles IDs List", "Server Members IDs List", "", "Server Human Count", "", "Server Roles Count", "Server Text Channels Count", "Server Voice Channels Count", "Server Verified", "Server Bans List", "Server Invites List", "Server Explicit Content Filter", "Server Boosts Count", "Server Boost Tier", "Server Banner URL", "Server Features List", "Server Owner ID", "Server Vanity URL Code", "Server Widget Channel ID"];
		return `${servers[parseInt(data.server)]} - ${info[parseInt(data.info)]}`;
	},

	//---------------------------------------------------------------------
	// Action Storage Function
	//
	// Stores the relevant variable info for the editor.
	//---------------------------------------------------------------------

	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		const info = parseInt(data.info);
		let dataType = "Unknown Type";
		switch(info) {
			case 0:
				dataType = "Server";
				break;
			case 1:
				dataType = "Server ID";
				break;
			case 2:
			case 3:
			case 4:
				dataType = "Text";
				break;
			case 5:
				dataType = "Icon URL";
				break;
			case 6:
				dataType = "Text";
				break;
			case 7:
			case 8:
			case 9:
				dataType = "Channel";
				break;
			case 10:
				dataType = "Role";
				break;
			case 11:
				dataType = "Server Member";
				break;
			case 12:
				dataType = "Server Member";
				break;
			case 13:
				dataType = "Channels List";
				break;
			case 14:
				dataType = "Roles List";
				break;
			case 15:
				dataType = "Members List";
				break;
			case 16:
				dataType = "Emojis List";
				break;
			case 17:
				dataType = "Number";
				break;
			case 18:
				dataType = "Date";
				break;
			case 19:
				dataType = "Number";
				break;
			case 20:
			case 21:
				dataType = "Boolean";
				break;
			case 22:
				dataType = "Date";
				break;
			case 23:
			case 24:
				dataType = "Number";
				break;
			case 25:
				dataType = "Boolean";
				break;
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
				dataType = "Number";
				break;
			case 31:
			case 32:
			case 33:
				dataType = "IDs List";
				break;
			case 35:
				dataType = "Number";
				break;
			case 37:
			case 38:
			case 39:
				dataType = "Number";
				break;
			case 40:
				dataType = "Boolean";
				break;
			case 41:
				dataType = "Bans List";
				break;
			case 42:
				dataType = "Invites List";
				break;
			case 43:
				dataType = "Text";
				break;
			case 44:
			case 45:
				dataType = "Number";
				break;
			case 46:
				dataType = "Banner URL";
				break;
			case 47:
				dataType = "Server Features List";
				break;
			case 48:
			case 49:
				dataType = "Text";
				break;
			case 50:
				dataType = "Channel ID";
				break;
		}
		return ([data.varName2, dataType]);
	},

	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------

	fields: ["server", "varName", "info", "storage", "varName2"],

	//---------------------------------------------------------------------
	// Command HTML
	//
	// This function returns a string containing the HTML used for
	// editting actions.
	//
	// The "isEvent" parameter will be true if this action is being used
	// for an event. Due to their nature, events lack certain information,
	// so edit the HTML to reflect this.
	//
	// The "data" parameter stores constants for select elements to use.
	// Each is an array: index 0 for commands, index 1 for events.
	// The names are: sendTargets, members, roles, channels,
	//                messages, servers, variables
	//---------------------------------------------------------------------

	html: function(isEvent, data) {
		return `
<div>
	<div style="float: left; width: 35%;">
		Serwer ??r??d??owy::<br>
		<select id="server" class="round" onchange="glob.serverChange(this, 'varNameContainer')">
			${data.servers[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div>
</div><br><br><br>
<div>
	<div style="padding-top: 8px; width: 70%;">
		Source Info:<br>
		<select id="info" class="round">
      <option value="0">Obiekt serwera</options>
      <option value="1">Identyfikator serwera (ID)</options>
      <option value="2">Nazwa serwera</options>
      <option value="3">Akronim nazwy serwera</options>
      <option value="17">Liczba cz??onk??w serwera</options>
      <option value="4">Region serwera</options>
      <option value="5">Adres URL ikony serwera</options>
      <option value="6">Poziom weryfikacji serwera</options>
      <option value="7">Domy??lny kana?? serwera</options>
      <option value="9">Kana?? systemu serwera</options>
      <option value="43">Filtr zawarto??ci jawnej serwera</options>
      <option value="8">Kana?? AFK serwera</options>
      <option value="19">Limit czasu AFK serwera</options>
      <option value="10">Domy??lna rola serwera</options>
      <option value="48">Identyfikator w??a??ciciela serwera</options>
      <option value="11">Server Owner Object</options>
      <option value="12">Server Bot Member</options>
      <option value="18">Data utworzenia serwera</options>
      <option value="22">Data do????czenia do serwera</options>
      <option value="20">Serwer dost??pny?</options>
      <option value="21">Server Large</options>
      <option value="40">Serwer zweryfikowany?</options>
      <option value="23">Liczba kana????w serwera</options>
      <option value="13">Lista kana????w serwera</options>
      <option value="31">Lista identyfikator??w kana????w serwera</options>
      <option value="37">Liczba r??l serwera</options>
      <option value="14">Lista r??l serwera</options>
      <option value="32">Lista identyfikator??w r??l serwera</options>
      <option value="30">Liczba bot??w serwera</options>
      <option value="35">Liczba ludzi na serwerze (bez bot??w)</options>
      <option value="15">Lista cz??onk??w serwera</options>
      <option value="33">Lista identyfikator??w cz??onk??w serwera</options>
      <option value="16">Lista emotikon??w serwera</options>
      <option value="24">Liczba emotikon??w na serwerze</options>
      <option value="25">Server Embed Enabled</options>
      <option value="27">Cz??onkowie serwera online Count</options>
      <option value="29">Liczba niedost??pnych cz??onk??w serwera</options>
      <option value="26">Liczba cz??onk??w serwera Nie przeszkadza??</options>
      <option value="28">Liczba cz??onk??w offline serwera</options>
      <option value="38">Liczba kana????w tekstowych serwera</options>
      <option value="39">Liczba kana????w g??osowych serwera</options>
      <option value="41">Lista ban??w</options>
      <option value="42">Lista zaprosze?? do serwera</options>
      <option value="44">Liczba Boost </options>
      <option value="45">Poziom Boost serwera</options>
      <option value="46">Adres URL banera serwera</options>
      <option value="47">Lista funkcji serwera</options>
      <option value="49">Niestandardowy kod URL serwera</options>
      <option value="50">Identyfikator kana??u wid??etu serwera</options>
		</select>
	</div>
</div><br>
<div>
	<div style="float: left; width: 35%;">
		Store In:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer2" style="float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName2" class="round" type="text"><br>
	</div>
</div>`;
	},

	//---------------------------------------------------------------------
	// Action Editor Init Code
	//
	// When the HTML is first applied to the action editor, this code
	// is also run. This helps add modifications or setup reactionary
	// functions for the DOM elements.
	//---------------------------------------------------------------------

	init: function() {
		const { glob, document } = this;

		glob.serverChange(document.getElementById("server"), "varNameContainer");
	},

	//---------------------------------------------------------------------
	// Action Bot Function
	//
	// This is the function for the action within the Bot's Action class.
	// Keep in mind event calls won't have access to the "msg" parameter,
	// so be sure to provide checks for variable existance.
	//---------------------------------------------------------------------

	action: async function(cache) {
		const data = cache.actions[cache.index];
		const server = parseInt(data.server);
		const varName = this.evalMessage(data.varName, cache);
		const info = parseInt(data.info);
		const targetServer = this.getServer(server, varName, cache);
		if(!targetServer) {
			this.callNextAction(cache);
			return;
		}
		const fetchMembers = async () => targetServer.memberCount !== targetServer.members.cache.size ? await targetServer.members.fetch() : null;
		let result;
		switch(info) {
			case 0:
				result = targetServer;
				break;
			case 1:
				result = targetServer.id;
				break;
			case 2:
				result = targetServer.name;
				break;
			case 3:
				result = targetServer.nameAcronym;
				break;
			case 4:
				result = targetServer.region;
				break;
			case 5:
				result = targetServer.iconURL({ dynamic: true, format: "png", size: 4096 });
				break;
			case 6:
				result = targetServer.verificationLevel;
				break;
			case 7:
				result = targetServer.getDefaultChannel();
				break;
			case 8:
				result = targetServer.afkChannel;
				break;
			case 9:
				result = targetServer.systemChannel;
				break;
			case 10:
				result = targetServer.roles.cache.get(targetServer.id);
				break;
			case 11:
				result = targetServer.owner;
				break;
			case 12:
				result = targetServer.me;
				break;
			case 13:
				result = targetServer.channels.cache.array();
				break;
			case 14:
				result = targetServer.roles.cache.array();
				break;
			case 15:
				result = targetServer.members.cache.array();
				break;
			case 16:
				result = targetServer.emojis.cache.array();
				break;
			case 17:
				result = targetServer.memberCount;
				break;
			case 18:
				result = targetServer.createdAt;
				break;
			case 19: // check below
				result = targetServer.afkTimeout;
				break;
			case 20:
				result = targetServer.available;
				break;
			case 21:
				result = targetServer.large;
				break;
			case 22:
				result = targetServer.joinedAt;
				break;
			case 23:
				result = targetServer.channels.cache.size;
				break;
			case 24:
				result = targetServer.emojis.cache.size;
				break;
			case 25:
				result = targetServer.embedEnabled;
				break;
			case 26:
				await fetchMembers();
				result = targetServer.members.cache.filter((m) => this.dest(m.user, "presence", "status") === "dnd").size;
				break;
			case 27:
				await fetchMembers();
				result = targetServer.members.cache.filter((m) => this.dest(m.user, "presence", "status") === "online").size;
				break;
			case 28:
				await fetchMembers();
				result = targetServer.members.cache.filter((m) => this.dest(m.user, "presence", "status") === "offline").size;
				break;
			case 29:
				await fetchMembers();
				result = targetServer.members.cache.filter((m) => this.dest(m.user, "presence", "status") === "idle").size;
				break;
			case 30:
				result = targetServer.members.cache.filter((m) => m.user.bot).size;
				break;
			case 31:
				result = targetServer.channels.cache.map((c) => c.id);
				break;
			case 32:
				result = targetServer.roles.cache.map((r) => r.id);
				break;
			case 33:
				await fetchMembers();
				result = targetServer.members.cache.map((m) => m.id);
				break;
			case 35:
				await fetchMembers();
				result = targetServer.members.cache.filter((m) => !m.user.bot).size;
				break;
			case 37:
				result = targetServer.roles.cache.size;
				break;
			case 38:
				result = targetServer.channels.cache.filter(c => c.type !== "voice" && c.type !== "category").size;
				break;
			case 39:
				result = targetServer.channels.cache.filter(c => c.type === "voice").size;
				break;
			case 40:
				result = targetServer.verified;
				break;
			case 41:
				const bans = await targetServer.fetchBans();
				result = bans.array();
				break;
			case 42:
				const invites = await targetServer.fetchInvites();
				result = invites.array();
				break;
			case 43:
				result = targetServer.explicitContentFilter;
				break;
			case 44:
				result = targetServer.premiumSubscriptionCount || 0;
				break;
			case 45:
				result = targetServer.premiumTier;
				break;
			case 46:
				result = targetServer.bannerURL();
				break;
			case 47:
				result = targetServer.features;
				break;
			case 48:
				result = targetServer.ownerID;
				break;
			case 49:
				result = targetServer.vanityURLCode;
				break;
			case 50:
				result = targetServer.widgetChannelID;
				break;
			default:
				break;
		}
		if(result !== undefined) {
			const storage = parseInt(data.storage);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage, varName2, cache);
		}
		this.callNextAction(cache);
	},

	//---------------------------------------------------------------------
	// Action Bot Mod
	//
	// Upon initialization of the bot, this code is run. Using the bot's
	// DBM namespace, one can add/modify existing functions if necessary.
	// In order to reduce conflictions between mods, be sure to alias
	// functions you wish to overwrite.
	//---------------------------------------------------------------------

	mod: function() {}
}; // End of module
