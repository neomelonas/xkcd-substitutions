var substitution = new XkcdSubstitution();
substitution.traverse(document.body);
document.title = substitution.transformText(document.title);

