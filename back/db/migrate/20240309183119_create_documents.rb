# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :documents do |t|
      t.date :date
      t.string :name
      t.text :notes
      t.references :documentable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
