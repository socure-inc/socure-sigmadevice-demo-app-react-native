source 'https://rubygems.org'

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby ">= 2.6.10"

# Pin CocoaPods to the exact version used to generate ios/Podfile.lock so every
# developer resolves identical pod checksums (avoids "checksums differ / run pod
# update" errors from version drift). 1.16.2 also supports Ruby 3.4+/4.0.
gem 'cocoapods', '1.16.2'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'

# Ruby 3.4+ / 4.0 removed these from the default gems, but CocoaPods'
# dependencies (CFPropertyList, molinillo) still require them.
gem 'nkf'
gem 'tsort'
