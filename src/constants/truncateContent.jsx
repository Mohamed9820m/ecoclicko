function truncateContent(content, lines) {
    const contentArray = content.split('\n');
    if (contentArray.length > lines) {
      return contentArray.slice(0, lines).join('\n') + '...';
    }
    return content;
  }
  