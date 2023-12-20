//An Interactive whiteboard application
//Here we used basic white board functions like clear, toggle drawing and color palate along with brush width adjustments
//Remeber we only used basic operations like clear the screen, toggle with drawing and select to drop, drag and shrink sketch, and user can able to  select all variant of colors with color brush adjustment option.
//Make more enhanced by adding more advanced features like forward », backward « options.

    const canvas = new fabric.Canvas('whiteboard', { isDrawingMode: true });

    // Customize brush properties
    canvas.freeDrawingBrush.color = '#000';
    canvas.freeDrawingBrush.width = 5;

    // Function to clear the canvas
    function clearCanvas() {
      canvas.clear();
    }

    // Function to toggle drawing mode
    function toggleCanvas() {
      canvas.isDrawingMode = !canvas.isDrawingMode;
    }

    // Function to apply color to brush
    function applyColor(color) {
      canvas.freeDrawingBrush.color = color;
    }

    // Function to change brush width
    function changeWidth(width) {
      canvas.freeDrawingBrush.width = parseInt(width, 10) || 1;
    }

    // Initialize Spectrum Color Picker
    $('#color-picker').spectrum({
      preferredFormat: 'hex',
      showInput: true,
      chooseText: 'Apply',
      cancelText: 'Cancel',
      change: function(color) {
        applyColor(color.toHexString());
      }
    });
  