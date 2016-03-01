class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   "first_name",                  null: false
      t.string   "last_name",                   null: false
      t.string   "email",                       null: false
      t.string   "password_digest",             null: false
      t.string   "session_token",               null: false
      t.integer  "friend_request_id"
      t.string   "birthday_month",              null: false
      t.string   "birthday_day",                null: false
      t.string   "birthday_year",               null: false
      t.string   "gender",            limit: 1, null: false
      t.timestamps null: false
    end
  end
end
