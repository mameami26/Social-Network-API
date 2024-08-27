module.exports = (timestamp) => {
    const date = new Date(timestamp);
    
    // Format options for the toLocaleString() method
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    
    return date.toLocaleString('en-US', options);
  };
  