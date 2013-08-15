
# string_rect.js

string_rect.js is a simple getter for every string rects in a HTMLElement.

## Example

```
document.getElementById("some_div").retrieveStringRects();
```

retrieveStringRects() returns every string rects:
```
{
	rect: {
		top: 11,
		left: 8,
		right: 18,
		bottom: 28,
		width: 10,
		height: 17
	},
	string: "d"
},
{
	rect: {
		top: 11,
		left: 18,
		right: 27,
		bottom: 28,
		width: 9,
		height: 17
	},
	string: "e"
},
{
	rect: {
		top: 11,
		left: 27,
		right: 42,
		bottom: 28,
		width: 15,
		height: 17
	},
	string: "m"
},
{
	rect: {
		top: 11,
		left: 42, 
		right: 52, 
		bottom: 28,
		width: 10,
		height: 17
	},
	string: "o"
}

```

## License
*string_rect.js* is released under the **MIT License**, see *LICENSE.txt*.

