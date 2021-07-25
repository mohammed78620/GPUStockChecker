let v = "ZOTAC NVIDIA GeForce RTX 3060 TWIN EDGE OC 12GB GDDR6 Graphics Card, 3584 Core, 1320MHz GPU, 1807MHz Boost"
v = v.replace(/\s/g, "-").replace(/,/g, "").toLowerCase()
console.log(v)