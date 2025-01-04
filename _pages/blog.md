---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 25
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">


<ul class="post-list">

	{% if page.pagination.enabled %}
		{% assign postlist = paginator.posts %}
	{% else %}
		{% assign postlist = site.posts %}
	{% endif %}

	{% for post in postlist %}

		{% if post.external_source == blank %}
			{% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
		{% else %}
			{% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
		{% endif %}
		{% assign year = post.date | date: "%Y" %}
		{% assign tags = post.tags | join: "" %}
		{% assign categories = post.categories | join: "" %}

		<li>

		<p class="post-meta">{{ post.date | date: '%B %d, %Y' }} &nbsp; &middot; &nbsp; {{ read_time }} min read</p>

		<h4>
			{% if post.redirect == blank %}
			<a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
			{% elsif post.redirect contains '://' %}
			<a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
			<svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
				<path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
			{% else %}
			<a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
			{% endif %}
		</h4>

		</li>

	{% endfor %}

</ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
