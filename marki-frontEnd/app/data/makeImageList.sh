#!/bin/bash

# Input file containing list of words (one per line)
INPUT_FILE="stocks_cleaned.txt"

# Output JavaScript file
OUTPUT_JS="image_list.js"

# Start the JS file with an opening brace
echo "const ImageOptions = {" > "$OUTPUT_JS"

# Read each line and append formatted require statement
while IFS= read -r text_line || [[ -n "$text_line" ]]; do
  echo "  '${text_line}': require(\"../../money_maker_prime_prime-main/graphs/${text_line}_all_data.png\")," >> "$OUTPUT_JS"
done < "$INPUT_FILE"

# Close the JS object and add export statement
echo "};" >> "$OUTPUT_JS"
echo "" >> "$OUTPUT_JS"
echo "export default ImageOptions;" >> "$OUTPUT_JS"

echo "✅ JavaScript file generated: $OUTPUT_JS"
