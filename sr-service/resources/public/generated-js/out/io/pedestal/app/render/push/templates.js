goog.provide('io.pedestal.app.render.push.templates');
goog.require('cljs.core');
goog.require('domina');
goog.require('io.pedestal.app.render.push');
io.pedestal.app.render.push.templates.sibling = (function sibling(path,segment){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),segment);
});
io.pedestal.app.render.push.templates.parent = (function parent(path){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,path));
});
io.pedestal.app.render.push.templates.update_template = (function update_template(t,m){
var seq__12894 = cljs.core.seq.call(null,t);
var chunk__12899 = null;
var count__12900 = 0;
var i__12901 = 0;
while(true){
if((i__12901 < count__12900))
{var vec__12906 = cljs.core._nth.call(null,chunk__12899,i__12901);
var k = cljs.core.nth.call(null,vec__12906,0,null);
var v = cljs.core.nth.call(null,vec__12906,1,null);
var seq__12902_12916 = cljs.core.seq.call(null,v);
var chunk__12903_12917 = null;
var count__12904_12918 = 0;
var i__12905_12919 = 0;
while(true){
if((i__12905_12919 < count__12904_12918))
{var map__12907_12920 = cljs.core._nth.call(null,chunk__12903_12917,i__12905_12919);
var map__12907_12921__$1 = ((cljs.core.seq_QMARK_.call(null,map__12907_12920))?cljs.core.apply.call(null,cljs.core.hash_map,map__12907_12920):map__12907_12920);
var attr_name_12922 = cljs.core.get.call(null,map__12907_12921__$1,"\uFDD0:attr-name");
var type_12923 = cljs.core.get.call(null,map__12907_12921__$1,"\uFDD0:type");
var id_12924 = cljs.core.get.call(null,map__12907_12921__$1,"\uFDD0:id");
var G__12908_12925 = type_12923;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12908_12925))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12924),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12908_12925))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12924),attr_name_12922);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12924),cljs.core.PersistentArrayMap.fromArray([attr_name_12922,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12926 = seq__12902_12916;
var G__12927 = chunk__12903_12917;
var G__12928 = count__12904_12918;
var G__12929 = (i__12905_12919 + 1);
seq__12902_12916 = G__12926;
chunk__12903_12917 = G__12927;
count__12904_12918 = G__12928;
i__12905_12919 = G__12929;
continue;
}
} else
{var temp__4092__auto___12930 = cljs.core.seq.call(null,seq__12902_12916);
if(temp__4092__auto___12930)
{var seq__12902_12931__$1 = temp__4092__auto___12930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12902_12931__$1))
{var c__9781__auto___12932 = cljs.core.chunk_first.call(null,seq__12902_12931__$1);
{
var G__12933 = cljs.core.chunk_rest.call(null,seq__12902_12931__$1);
var G__12934 = c__9781__auto___12932;
var G__12935 = cljs.core.count.call(null,c__9781__auto___12932);
var G__12936 = 0;
seq__12902_12916 = G__12933;
chunk__12903_12917 = G__12934;
count__12904_12918 = G__12935;
i__12905_12919 = G__12936;
continue;
}
} else
{var map__12909_12937 = cljs.core.first.call(null,seq__12902_12931__$1);
var map__12909_12938__$1 = ((cljs.core.seq_QMARK_.call(null,map__12909_12937))?cljs.core.apply.call(null,cljs.core.hash_map,map__12909_12937):map__12909_12937);
var attr_name_12939 = cljs.core.get.call(null,map__12909_12938__$1,"\uFDD0:attr-name");
var type_12940 = cljs.core.get.call(null,map__12909_12938__$1,"\uFDD0:type");
var id_12941 = cljs.core.get.call(null,map__12909_12938__$1,"\uFDD0:id");
var G__12910_12942 = type_12940;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12910_12942))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12941),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12910_12942))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12941),attr_name_12939);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12941),cljs.core.PersistentArrayMap.fromArray([attr_name_12939,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12943 = cljs.core.next.call(null,seq__12902_12931__$1);
var G__12944 = null;
var G__12945 = 0;
var G__12946 = 0;
seq__12902_12916 = G__12943;
chunk__12903_12917 = G__12944;
count__12904_12918 = G__12945;
i__12905_12919 = G__12946;
continue;
}
}
} else
{}
}
break;
}
{
var G__12947 = seq__12894;
var G__12948 = chunk__12899;
var G__12949 = count__12900;
var G__12950 = (i__12901 + 1);
seq__12894 = G__12947;
chunk__12899 = G__12948;
count__12900 = G__12949;
i__12901 = G__12950;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12894);
if(temp__4092__auto__)
{var seq__12894__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12894__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__12894__$1);
{
var G__12951 = cljs.core.chunk_rest.call(null,seq__12894__$1);
var G__12952 = c__9781__auto__;
var G__12953 = cljs.core.count.call(null,c__9781__auto__);
var G__12954 = 0;
seq__12894 = G__12951;
chunk__12899 = G__12952;
count__12900 = G__12953;
i__12901 = G__12954;
continue;
}
} else
{var vec__12911 = cljs.core.first.call(null,seq__12894__$1);
var k = cljs.core.nth.call(null,vec__12911,0,null);
var v = cljs.core.nth.call(null,vec__12911,1,null);
var seq__12895_12955 = cljs.core.seq.call(null,v);
var chunk__12896_12956 = null;
var count__12897_12957 = 0;
var i__12898_12958 = 0;
while(true){
if((i__12898_12958 < count__12897_12957))
{var map__12912_12959 = cljs.core._nth.call(null,chunk__12896_12956,i__12898_12958);
var map__12912_12960__$1 = ((cljs.core.seq_QMARK_.call(null,map__12912_12959))?cljs.core.apply.call(null,cljs.core.hash_map,map__12912_12959):map__12912_12959);
var attr_name_12961 = cljs.core.get.call(null,map__12912_12960__$1,"\uFDD0:attr-name");
var type_12962 = cljs.core.get.call(null,map__12912_12960__$1,"\uFDD0:type");
var id_12963 = cljs.core.get.call(null,map__12912_12960__$1,"\uFDD0:id");
var G__12913_12964 = type_12962;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12913_12964))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12963),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12913_12964))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12963),attr_name_12961);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12963),cljs.core.PersistentArrayMap.fromArray([attr_name_12961,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12965 = seq__12895_12955;
var G__12966 = chunk__12896_12956;
var G__12967 = count__12897_12957;
var G__12968 = (i__12898_12958 + 1);
seq__12895_12955 = G__12965;
chunk__12896_12956 = G__12966;
count__12897_12957 = G__12967;
i__12898_12958 = G__12968;
continue;
}
} else
{var temp__4092__auto___12969__$1 = cljs.core.seq.call(null,seq__12895_12955);
if(temp__4092__auto___12969__$1)
{var seq__12895_12970__$1 = temp__4092__auto___12969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12895_12970__$1))
{var c__9781__auto___12971 = cljs.core.chunk_first.call(null,seq__12895_12970__$1);
{
var G__12972 = cljs.core.chunk_rest.call(null,seq__12895_12970__$1);
var G__12973 = c__9781__auto___12971;
var G__12974 = cljs.core.count.call(null,c__9781__auto___12971);
var G__12975 = 0;
seq__12895_12955 = G__12972;
chunk__12896_12956 = G__12973;
count__12897_12957 = G__12974;
i__12898_12958 = G__12975;
continue;
}
} else
{var map__12914_12976 = cljs.core.first.call(null,seq__12895_12970__$1);
var map__12914_12977__$1 = ((cljs.core.seq_QMARK_.call(null,map__12914_12976))?cljs.core.apply.call(null,cljs.core.hash_map,map__12914_12976):map__12914_12976);
var attr_name_12978 = cljs.core.get.call(null,map__12914_12977__$1,"\uFDD0:attr-name");
var type_12979 = cljs.core.get.call(null,map__12914_12977__$1,"\uFDD0:type");
var id_12980 = cljs.core.get.call(null,map__12914_12977__$1,"\uFDD0:id");
var G__12915_12981 = type_12979;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12915_12981))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12980),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12915_12981))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12980),attr_name_12978);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12980),cljs.core.PersistentArrayMap.fromArray([attr_name_12978,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12982 = cljs.core.next.call(null,seq__12895_12970__$1);
var G__12983 = null;
var G__12984 = 0;
var G__12985 = 0;
seq__12895_12955 = G__12982;
chunk__12896_12956 = G__12983;
count__12897_12957 = G__12984;
i__12898_12958 = G__12985;
continue;
}
}
} else
{}
}
break;
}
{
var G__12986 = cljs.core.next.call(null,seq__12894__$1);
var G__12987 = null;
var G__12988 = 0;
var G__12989 = 0;
seq__12894 = G__12986;
chunk__12899 = G__12987;
count__12900 = G__12988;
i__12901 = G__12989;
continue;
}
}
} else
{return null;
}
}
break;
}
});
io.pedestal.app.render.push.templates.add_in_template = (function add_in_template(f,t,m){
var seq__13004 = cljs.core.seq.call(null,m);
var chunk__13005 = null;
var count__13006 = 0;
var i__13007 = 0;
while(true){
if((i__13007 < count__13006))
{var vec__13008 = cljs.core._nth.call(null,chunk__13005,i__13007);
var k = cljs.core.nth.call(null,vec__13008,0,null);
var v = cljs.core.nth.call(null,vec__13008,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__13004,chunk__13005,count__13006,i__13007,vec__13008,k,v){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13004,chunk__13005,count__13006,i__13007,vec__13008,k,v))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__13009_13018 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__13010_13019 = null;
var count__13011_13020 = 0;
var i__13012_13021 = 0;
while(true){
if((i__13012_13021 < count__13011_13020))
{var info_13022 = cljs.core._nth.call(null,chunk__13010_13019,i__13012_13021);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13022)),v);
{
var G__13023 = seq__13009_13018;
var G__13024 = chunk__13010_13019;
var G__13025 = count__13011_13020;
var G__13026 = (i__13012_13021 + 1);
seq__13009_13018 = G__13023;
chunk__13010_13019 = G__13024;
count__13011_13020 = G__13025;
i__13012_13021 = G__13026;
continue;
}
} else
{var temp__4092__auto___13027 = cljs.core.seq.call(null,seq__13009_13018);
if(temp__4092__auto___13027)
{var seq__13009_13028__$1 = temp__4092__auto___13027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13009_13028__$1))
{var c__9781__auto___13029 = cljs.core.chunk_first.call(null,seq__13009_13028__$1);
{
var G__13030 = cljs.core.chunk_rest.call(null,seq__13009_13028__$1);
var G__13031 = c__9781__auto___13029;
var G__13032 = cljs.core.count.call(null,c__9781__auto___13029);
var G__13033 = 0;
seq__13009_13018 = G__13030;
chunk__13010_13019 = G__13031;
count__13011_13020 = G__13032;
i__13012_13021 = G__13033;
continue;
}
} else
{var info_13034 = cljs.core.first.call(null,seq__13009_13028__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13034)),v);
{
var G__13035 = cljs.core.next.call(null,seq__13009_13028__$1);
var G__13036 = null;
var G__13037 = 0;
var G__13038 = 0;
seq__13009_13018 = G__13035;
chunk__13010_13019 = G__13036;
count__13011_13020 = G__13037;
i__13012_13021 = G__13038;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__13039 = seq__13004;
var G__13040 = chunk__13005;
var G__13041 = count__13006;
var G__13042 = (i__13007 + 1);
seq__13004 = G__13039;
chunk__13005 = G__13040;
count__13006 = G__13041;
i__13007 = G__13042;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13004);
if(temp__4092__auto__)
{var seq__13004__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13004__$1))
{var c__9781__auto__ = cljs.core.chunk_first.call(null,seq__13004__$1);
{
var G__13043 = cljs.core.chunk_rest.call(null,seq__13004__$1);
var G__13044 = c__9781__auto__;
var G__13045 = cljs.core.count.call(null,c__9781__auto__);
var G__13046 = 0;
seq__13004 = G__13043;
chunk__13005 = G__13044;
count__13006 = G__13045;
i__13007 = G__13046;
continue;
}
} else
{var vec__13013 = cljs.core.first.call(null,seq__13004__$1);
var k = cljs.core.nth.call(null,vec__13013,0,null);
var v = cljs.core.nth.call(null,vec__13013,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__13004,chunk__13005,count__13006,i__13007,vec__13013,k,v,seq__13004__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__13004,chunk__13005,count__13006,i__13007,vec__13013,k,v,seq__13004__$1,temp__4092__auto__))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__13014_13047 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__13015_13048 = null;
var count__13016_13049 = 0;
var i__13017_13050 = 0;
while(true){
if((i__13017_13050 < count__13016_13049))
{var info_13051 = cljs.core._nth.call(null,chunk__13015_13048,i__13017_13050);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13051)),v);
{
var G__13052 = seq__13014_13047;
var G__13053 = chunk__13015_13048;
var G__13054 = count__13016_13049;
var G__13055 = (i__13017_13050 + 1);
seq__13014_13047 = G__13052;
chunk__13015_13048 = G__13053;
count__13016_13049 = G__13054;
i__13017_13050 = G__13055;
continue;
}
} else
{var temp__4092__auto___13056__$1 = cljs.core.seq.call(null,seq__13014_13047);
if(temp__4092__auto___13056__$1)
{var seq__13014_13057__$1 = temp__4092__auto___13056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13014_13057__$1))
{var c__9781__auto___13058 = cljs.core.chunk_first.call(null,seq__13014_13057__$1);
{
var G__13059 = cljs.core.chunk_rest.call(null,seq__13014_13057__$1);
var G__13060 = c__9781__auto___13058;
var G__13061 = cljs.core.count.call(null,c__9781__auto___13058);
var G__13062 = 0;
seq__13014_13047 = G__13059;
chunk__13015_13048 = G__13060;
count__13016_13049 = G__13061;
i__13017_13050 = G__13062;
continue;
}
} else
{var info_13063 = cljs.core.first.call(null,seq__13014_13057__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13063)),v);
{
var G__13064 = cljs.core.next.call(null,seq__13014_13057__$1);
var G__13065 = null;
var G__13066 = 0;
var G__13067 = 0;
seq__13014_13047 = G__13064;
chunk__13015_13048 = G__13065;
count__13016_13049 = G__13066;
i__13017_13050 = G__13067;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__13068 = cljs.core.next.call(null,seq__13004__$1);
var G__13069 = null;
var G__13070 = 0;
var G__13071 = 0;
seq__13004 = G__13068;
chunk__13005 = G__13069;
count__13006 = G__13070;
i__13007 = G__13071;
continue;
}
}
} else
{return null;
}
}
break;
}
});
io.pedestal.app.render.push.templates.update_t = (function update_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.prepend_t = (function prepend_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.prepend_BANG_,template,data);
});
io.pedestal.app.render.push.templates.insert_t = (function insert_t(r,path,data,idx){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,(function (p1__13072_SHARP_,p2__13073_SHARP_){
return domina.insert_BANG_.call(null,p1__13072_SHARP_,p2__13073_SHARP_,idx);
}),template,data);
});
io.pedestal.app.render.push.templates.append_t = (function append_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.append_BANG_,template,data);
});
io.pedestal.app.render.push.templates.update_parent_t = (function update_parent_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,io.pedestal.app.render.push.templates.parent.call(null,path),"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.add_template = (function add_template(r,path,make_template){
var vec__13075 = make_template.call(null);
var template = cljs.core.nth.call(null,vec__13075,0,null);
var html = cljs.core.nth.call(null,vec__13075,1,null);
io.pedestal.app.render.push.set_data_BANG_.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
