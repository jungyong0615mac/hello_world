"use strict";(self.webpackChunk_jupyterlab_git=self.webpackChunk_jupyterlab_git||[]).push([[266],{9266:(t,e,r)=>{r.r(e),r.d(e,{BPlusTree:()=>o,LinkedList:()=>u});var i,n=r(9850),o=function(){function t(t){this._root=new i.LeafNode,this.cmp=t}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this._root.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._root.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"first",{get:function(){var t=i.firstLeaf(this._root);return t.size>0?t.items[0]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){var t=i.lastLeaf(this._root);return t.size>0?t.items[t.size-1]:void 0},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return i.iterItems(this._root)},t.prototype.retro=function(){return i.retroItems(this._root)},t.prototype.slice=function(t,e){return i.sliceItems(this._root,t,e)},t.prototype.retroSlice=function(t,e){return i.retroSliceItems(this._root,t,e)},t.prototype.at=function(t){return i.itemAt(this._root,t)},t.prototype.has=function(t,e){return i.hasItem(this._root,t,e)},t.prototype.indexOf=function(t,e){return i.indexOf(this._root,t,e)},t.prototype.get=function(t,e){return i.getItem(this._root,t,e)},t.prototype.assign=function(t){this.clear(),this.update(t)},t.prototype.insert=function(t){var e=i.insertItem(this._root,t,this.cmp);return this._root=i.maybeSplitRoot(this._root),e},t.prototype.update=function(t){var e=this;(0,n.each)(t,(function(t){e.insert(t)}))},t.prototype.delete=function(t,e){var r=i.deleteItem(this._root,t,e);return this._root=i.maybeExtractRoot(this._root),r},t.prototype.remove=function(t){var e=i.removeItem(this._root,t);return this._root=i.maybeExtractRoot(this._root),e},t.prototype.clear=function(){i.clear(this._root),this._root=new i.LeafNode},t}();!function(t){t.from=function(e,r){var i=new t(r);return i.assign(e),i}}(o||(o={})),function(t){var e=function(){function t(){this.items=[],this.sizes=[],this.children=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.sizes[this.sizes.length-1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t}();t.BranchNode=e;var r=function(){function t(){this.next=null,this.prev=null,this.items=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),t}();function i(t){for(;0===t.type;)t=t.children[0];return t}function o(t){for(;0===t.type;)t=t.children[t.children.length-1];return t}function s(t){0===t.type?((0,n.each)(t.children,s),t.children.length=0,t.sizes.length=0,t.items.length=0):(t.items.length=0,t.next=null,t.prev=null)}t.LeafNode=r,t.firstLeaf=i,t.lastLeaf=o,t.iterItems=function(t){var e=i(t);return new f(e,0,-1)},t.retroItems=function(t){var e=o(t);return new l(e,e.size-1,-1)},t.sliceItems=function(t,e,r){e=void 0===e?0:e<0?Math.max(0,e+t.size):Math.min(e,t.size),r=void 0===r?t.size:r<0?Math.max(0,r+t.size):Math.min(r,t.size);var i=Math.max(0,r-e);if(0===i)return(0,n.empty)();for(;0===t.type;){var o=p(t.sizes,e);o>0&&(e-=t.sizes[o-1]),t=t.children[o]}return new f(t,e,i)},t.retroSliceItems=function(t,e,r){e=void 0===e?t.size-1:e<0?Math.max(-1,e+t.size):Math.min(e,t.size-1),r=void 0===r?-1:r<0?Math.max(-1,r+t.size):Math.min(r,t.size-1);var i=Math.max(0,e-r);if(0===i)return(0,n.empty)();for(;0===t.type;){var o=p(t.sizes,e);o>0&&(e-=t.sizes[o-1]),t=t.children[o]}return new l(t,e,i)},t.itemAt=function(t,e){if(e<0&&(e+=t.size),!(e<0||e>=t.size)){for(;0===t.type;){var r=p(t.sizes,e);r>0&&(e-=t.sizes[r-1]),t=t.children[r]}return t.items[e]}},t.hasItem=function(t,e,r){for(;0===t.type;){var i=a(t.items,e,r);t=t.children[i]}return c(t.items,e,r)>=0},t.indexOf=function(t,e,r){for(var i=0;0===t.type;){var n=a(t.items,e,r);n>0&&(i+=t.sizes[n-1]),t=t.children[n]}var o=c(t.items,e,r);return o>=0?i+o:-i+o},t.getItem=function(t,e,r){for(;0===t.type;){var i=a(t.items,e,r);t=t.children[i]}var n=c(t.items,e,r);return n>=0?t.items[n]:void 0},t.insertItem=function t(e,r,i){if(1===e.type){var o,s=c(e.items,r,i);return s>=0?(o=e.items[s],e.items[s]=r):(o=void 0,n.ArrayExt.insert(e.items,-s-1,r)),o}var h=a(e.items,r,i),f=e.children[h],l=f.size,p=t(f,r,i),m=f.size;if(e.items[h]=f.items[0],l===m)return p;if(f.width>u){var y=_(f);n.ArrayExt.insert(e.children,h+1,y),n.ArrayExt.insert(e.items,h+1,y.items[0])}return d(e,h),p},t.deleteItem=function t(e,r,i){if(1===e.type){var o=c(e.items,r,i);if(o<0)return;return n.ArrayExt.removeAt(e.items,o)}var s=a(e.items,r,i),u=e.children[s],f=u.size,l=t(u,r,i);return f===u.size||(e.items[s]=u.items[0],u.width<h&&(s=m(e,s)),d(e,s)),l},t.removeItem=function t(e,r){if(r<0&&(r+=e.size),!(r<0||r>=e.size)){if(1===e.type)return n.ArrayExt.removeAt(e.items,r);var i=p(e.sizes,r);i>0&&(r-=e.sizes[i]);var o=e.children[i],s=t(o,r);return e.items[i]=o.items[0],o.width<h&&(i=m(e,i)),d(e,i),s}},t.clear=s,t.maybeSplitRoot=function(t){if(t.width<=u)return t;var r=new e,i=_(t);return r.sizes[0]=t.size,r.sizes[1]=t.size+i.size,r.children[0]=t,r.children[1]=i,r.items[0]=t.items[0],r.items[1]=i.items[0],r},t.maybeExtractRoot=function(t){if(1===t.type)return t;if(t.children.length>1)return t;var e=t.children.pop();return s(t),e};var u=32,h=u>>1,f=function(){function t(t,e,r){this._node=t,this._index=e,this._count=r}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(null!==this._node&&0!==this._count)return this._index>=this._node.size?(this._node=this._node.next,this._index=0,this.next()):(this._count>0&&this._count--,this._node.items[this._index++])},t}(),l=function(){function t(t,e,r){this._node=t,this._index=e,this._count=r}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(null!==this._node&&0!==this._count)return this._index>=this._node.size&&(this._index=this._node.size-1),this._index<0?(this._node=this._node.prev,this._index=this._node?this._node.size-1:-1,this.next()):(this._count>0&&this._count--,this._node.items[this._index--])},t}();function p(t,e){for(var r=t.length,i=0;i<r;++i)if(t[i]>e)return i;return r-1}function a(t,e,r){for(var i=t.length,n=1;n<i;++n)if(r(t[n],e)>0)return n-1;return i-1}function c(t,e,r){for(var i=t.length,n=0;n<i;++n){var o=r(t[n],e);if(0===o)return n;if(o>0)return-n-1}return-i-1}function d(t,e){for(var r=t.sizes,i=t.children,n=e>0?r[e-1]:0,o=i.length;e<o;++e)n=r[e]=n+i[e].size;r.length=i.length}function _(t){if(1===t.type){for(var i=new r,n=t.items,o=i.items,s=h,u=n.length;s<u;++s)o.push(n[s]);return n.length=h,t.next&&(t.next.prev=i),i.next=t.next,i.prev=t,t.next=i,i}var f=new e,l=t.children,p=f.children;for(s=h,u=l.length;s<u;++s)p.push(l[s]);l.length=h;var a=t.items,c=f.items;for(s=h,u=a.length;s<u;++s)c.push(a[s]);return a.length=h,d(t,h),d(f,0),f}function m(t,e){var r,i,o,u,f,l,p=t.children[e],a=0===e?t.children[e+1]:t.children[e-1],c=0===e,_=1===p.type,m=a.width>h;if(_&&m&&c){var y=a;return(v=p).items.push(y.items.shift()),t.items[e+1]=y.items[0],e}if(_&&m&&!c)return y=a,(v=p).items.unshift(y.items.pop()),t.items[e]=v.items[0],e-1;if(_&&!m&&c){var v=p;return(r=(y=a).items).unshift.apply(r,v.items),n.ArrayExt.removeAt(t.children,e),n.ArrayExt.removeAt(t.items,e+1),v.prev&&(v.prev.next=y),y.prev=v.prev,s(v),e}if(_&&!m&&!c)return v=p,(i=(y=a).items).push.apply(i,v.items),n.ArrayExt.removeAt(t.children,e),n.ArrayExt.removeAt(t.items,e),v.next&&(v.next.prev=y),y.next=v.next,s(v),e-1;if(!_&&m&&c)return y=a,(v=p).children.push(y.children.shift()),v.items.push(y.items.shift()),t.items[e+1]=y.items[0],d(v,v.width-1),d(y,0),e;if(!_&&m&&!c)return y=a,(v=p).children.unshift(y.children.pop()),v.items.unshift(y.items.pop()),t.items[e]=v.items[0],d(v,0),d(y,y.width-1),e-1;if(!_&&!m&&c)return v=p,(o=(y=a).children).unshift.apply(o,v.children),(u=y.items).unshift.apply(u,v.items),n.ArrayExt.removeAt(t.children,e),n.ArrayExt.removeAt(t.items,e+1),d(y,0),v.children.length=0,s(v),e;if(!_&&!m&&!c)return v=p,(f=(y=a).children).push.apply(f,v.children),(l=y.items).push.apply(l,v.items),n.ArrayExt.removeAt(t.children,e),n.ArrayExt.removeAt(t.items,e),d(y,0),v.children.length=0,s(v),e-1;throw"unreachable"}}(i||(i={}));var s,u=function(){function t(){this._first=null,this._last=null,this._size=0}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"first",{get:function(){return this._first?this._first.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return this._last?this._last.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstNode",{get:function(){return this._first},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lastNode",{get:function(){return this._last},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return new t.ForwardValueIterator(this._first)},t.prototype.retro=function(){return new t.RetroValueIterator(this._last)},t.prototype.nodes=function(){return new t.ForwardNodeIterator(this._first)},t.prototype.retroNodes=function(){return new t.RetroNodeIterator(this._last)},t.prototype.assign=function(t){var e=this;this.clear(),(0,n.each)(t,(function(t){e.addLast(t)}))},t.prototype.push=function(t){this.addLast(t)},t.prototype.pop=function(){return this.removeLast()},t.prototype.shift=function(t){this.addFirst(t)},t.prototype.unshift=function(){return this.removeFirst()},t.prototype.addFirst=function(t){var e=new s.LinkedListNode(this,t);return this._first?(e.next=this._first,this._first.prev=e,this._first=e):(this._first=e,this._last=e),this._size++,e},t.prototype.addLast=function(t){var e=new s.LinkedListNode(this,t);return this._last?(e.prev=this._last,this._last.next=e,this._last=e):(this._first=e,this._last=e),this._size++,e},t.prototype.insertBefore=function(t,e){if(!e||e===this._first)return this.addFirst(t);if(!(e instanceof s.LinkedListNode)||e.list!==this)throw new Error("Reference node is not owned by the list.");var r=new s.LinkedListNode(this,t),i=e,n=i.prev;return r.next=i,r.prev=n,i.prev=r,n.next=r,this._size++,r},t.prototype.insertAfter=function(t,e){if(!e||e===this._last)return this.addLast(t);if(!(e instanceof s.LinkedListNode)||e.list!==this)throw new Error("Reference node is not owned by the list.");var r=new s.LinkedListNode(this,t),i=e,n=i.next;return r.next=n,r.prev=i,i.next=r,n.prev=r,this._size++,r},t.prototype.removeFirst=function(){var t=this._first;if(t)return t===this._last?(this._first=null,this._last=null):(this._first=t.next,this._first.prev=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value},t.prototype.removeLast=function(){var t=this._last;if(t)return t===this._first?(this._first=null,this._last=null):(this._last=t.prev,this._last.next=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value},t.prototype.removeNode=function(t){if(!(t instanceof s.LinkedListNode)||t.list!==this)throw new Error("Node is not owned by the list.");var e=t;e===this._first&&e===this._last?(this._first=null,this._last=null):e===this._first?(this._first=e.next,this._first.prev=null):e===this._last?(this._last=e.prev,this._last.next=null):(e.next.prev=e.prev,e.prev.next=e.next),e.list=null,e.next=null,e.prev=null,this._size--},t.prototype.clear=function(){for(var t=this._first;t;){var e=t.next;t.list=null,t.prev=null,t.next=null,t=e}this._first=null,this._last=null,this._size=0},t}();!function(t){t.from=function(e){var r=new t;return r.assign(e),r};var e=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.next,t.value}},t}();t.ForwardValueIterator=e;var r=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.prev,t.value}},t}();t.RetroValueIterator=r;var i=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.next,t}},t}();t.ForwardNodeIterator=i;var n=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.prev,t}},t}();t.RetroNodeIterator=n}(u||(u={})),function(t){t.LinkedListNode=function(t,e){this.list=null,this.next=null,this.prev=null,this.list=t,this.value=e}}(s||(s={}))}}]);