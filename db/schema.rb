# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160328053459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_likes", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comment_likes", ["post_id", "author_id"], name: "index_comment_likes_on_post_id_and_author_id", unique: true, using: :btree
  add_index "comment_likes", ["post_id"], name: "index_comment_likes_on_post_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.integer  "reply_id"
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friend_requests", force: :cascade do |t|
    t.integer  "friend_id",                  null: false
    t.integer  "user_id",                    null: false
    t.boolean  "denied",     default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "friend_requests", ["friend_id", "user_id"], name: "index_friend_requests_on_friend_id_and_user_id", unique: true, using: :btree
  add_index "friend_requests", ["user_id", "friend_id"], name: "index_friend_requests_on_user_id_and_friend_id", unique: true, using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "friend_id",                  null: false
    t.integer  "user_id",                    null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "denied",     default: false, null: false
    t.boolean  "confirmed",  default: false, null: false
  end

  add_index "friendships", ["friend_id"], name: "index_friendships_on_friend_id", using: :btree
  add_index "friendships", ["user_id"], name: "index_friendships_on_user_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["post_id", "author_id"], name: "index_likes_on_post_id_and_author_id", unique: true, using: :btree
  add_index "likes", ["post_id"], name: "index_likes_on_post_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "url",        null: false
    t.string   "photo_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "public_id",  null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "target_id",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                                                        null: false
    t.string   "last_name",                                                         null: false
    t.string   "email",                                                             null: false
    t.string   "password_digest",                                                   null: false
    t.string   "session_token",                                                     null: false
    t.integer  "friend_request_id"
    t.string   "birthday_month",                                                    null: false
    t.string   "birthday_day",                                                      null: false
    t.string   "birthday_year",                                                     null: false
    t.string   "gender",            limit: 1,                                       null: false
    t.datetime "created_at",                                                        null: false
    t.datetime "updated_at",                                                        null: false
    t.string   "prof_url",                    default: "/pics/default_profile.png", null: false
    t.string   "banner_url",                  default: "/pics/default_banner.png",  null: false
    t.string   "lives"
    t.string   "education"
    t.string   "work"
    t.text     "about"
  end

end
