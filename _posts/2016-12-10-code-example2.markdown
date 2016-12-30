---
layout: post
title:  "Code Example (markdown)"
date:   2016-12-08 16:40:46 +1300
group: Coding
categories:
  - coding
gists:
  - MyFirstGist
description: "This post contains snippets of code."
---
This is a paragraph full of random things and snippets of code like {% include codeblock.md content='public void Destroy() { }' codetype='csharp' %} and {% include codeblock.md content='int *p = new int(4);' codetype='cpp' %}.

---

### Gist

{% include gist.html title=page.gists.first file='snippet.cpp' %}

---

### Codeblock

{% capture code %}#include <iostream>
using namespace std;

struct int2 {
public:
	int x, y;
	int2(int x, int y) : x(x), y(y) {}
};

int main() {
	int2 v(3,2);
	cout << v.x << " " << v.y << endl;
	return 0;
}{% endcapture %}
{% include codeblock.md block=true content=code codetype='cpp' %}