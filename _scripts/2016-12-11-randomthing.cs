---
scriptname: randomthing.cs
codetype: csharp
date: 2016-12-18 13:05:57 +1300
---
struct int2 {
	public int x, y;
	public int2(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

int2 vector = new int2(4,5);
Debug.Log(vector.x + " " + vector.y);