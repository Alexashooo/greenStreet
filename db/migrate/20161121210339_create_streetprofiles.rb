class CreateStreetprofiles < ActiveRecord::Migration[5.0]
  def change
    create_table :streetprofiles do |t|
      t.string :name
      t.string :street_configuration
      t.integer :user_id

      t.timestamps
    end
  end
end
