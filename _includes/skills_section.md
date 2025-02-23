

{% capture markdown_content %}
{% include_absolute 'index.md' %}
{% endcapture %}

{% assign capturing = false %}
{% assign extracted_content = "" %}

{% assign lines = markdown_content | newline_to_br | split: '<br />' %}
{% for line in lines %}
    {% if line contains '## Skills' %}
        {% assign capturing = true %}
        {% continue %}
    {% endif %}

    {% if capturing %}
        {% if line contains '## ' %}
            {% break %}
        {% endif %}
        {% assign extracted_content = extracted_content | append: line | append: '<br />' %}
    {% endif %}
{% endfor %}

{{ extracted_content | strip_newlines }}
