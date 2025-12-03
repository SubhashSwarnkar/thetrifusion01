#!/bin/bash
# Script to replace Mailchimp API key in git history

if [ -f "public/templates-preview/Yoga/Yoga/3/php/subscribe.php" ]; then
  sed -i "s/53bb3bcad3947b9c5b45884b439097f4-us3/YOUR_MAILCHIMP_API_KEY_HERE/g" "public/templates-preview/Yoga/Yoga/3/php/subscribe.php"
  sed -i "s/fd1b8baf3f/YOUR_MAILCHIMP_LIST_ID_HERE/g" "public/templates-preview/Yoga/Yoga/3/php/subscribe.php"
fi

if [ -f "src/templets/Yoga/Yoga/3/php/subscribe.php" ]; then
  sed -i "s/53bb3bcad3947b9c5b45884b439097f4-us3/YOUR_MAILCHIMP_API_KEY_HERE/g" "src/templets/Yoga/Yoga/3/php/subscribe.php"
  sed -i "s/fd1b8baf3f/YOUR_MAILCHIMP_LIST_ID_HERE/g" "src/templets/Yoga/Yoga/3/php/subscribe.php"
fi

