# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_todo2_session',
  :secret      => '6a37591d9517f8ba5a330584ee655ee59bd7380c5edde61f178c58ddc981fded48dd8820d7772002b726121bbf5766342bdfc951632b69d3d5f2ea846142a659'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
